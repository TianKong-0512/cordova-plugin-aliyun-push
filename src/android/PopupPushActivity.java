package com.alipush;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.util.Log;

import com.alibaba.sdk.android.push.AndroidPopupActivity;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public class PopupPushActivity extends AndroidPopupActivity {
    private static final String TAG = "PopupPushActivity";
    private static final String onSysNoticeOpened = "notificationOpened";

    private static class OpenType {
        static final String ACTIVITY = "activity";
        static final String APPLICATION = "application";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    /**
     * 实现通知打开回调方法，获取通知相关信息
     *
     * @param title   标题
     * @param summary 内容
     * @param extMap  额外参数
     */
    @RequiresApi(api = Build.VERSION_CODES.GINGERBREAD)
    @Override
    protected void onSysNoticeOpened(String title, String summary, Map<String, String> extMap) {
        Log.i(TAG, "辅助弹窗 onSysNoticeOpened, title: " + title + ", content: " + summary + ", extMap: " + extMap);
        checkAction(extMap);
        savePushData(title, summary, extMap);
        finish();
    }

    private void checkAction(Map<String, String> extMap) {
//        if (null == extMap || extMap.isEmpty()) {
//            return;
//        }
        try {
            String openType = (extMap.get("open_type") + "").toLowerCase();
            Class<?> activityClz = null;
            switch (openType) {
                case OpenType.ACTIVITY:
                    activityClz = Class.forName(Objects.requireNonNull(extMap.get("activity")));
                    break;
                case OpenType.APPLICATION:
                    final PackageManager pm = getApplication().getPackageManager();
                    Intent mainIntent = new Intent(Intent.ACTION_MAIN, null);
                    mainIntent.addCategory(Intent.CATEGORY_LAUNCHER);
                    List<ResolveInfo> appList = pm.queryIntentActivities(mainIntent, 0);
                    for (ResolveInfo temp : appList) {
                        if (temp.activityInfo.packageName.equals(getApplication().getPackageName())) {
                            activityClz = Class.forName(temp.activityInfo.name);
                            break;
                        }
                    }
                    break;
                default:
                    activityClz = com.alipush.AliyunPush.cls;
                    break;
            }
            if (activityClz != null) {
                Intent intent = new Intent(PopupPushActivity.this, activityClz);
                startActivity(intent);
            }
        } catch (Exception e) {
            Log.e(TAG, "checkAction: ", e);
        }
    }

    //将获取到的通知数据保存在sp中
    @RequiresApi(api = Build.VERSION_CODES.GINGERBREAD)
    private void savePushData(String title, String content, Map<String, String> extraMap) {
        try {
            JSONObject data;
            if (extraMap != null && !extraMap.isEmpty()) {
                data = new JSONObject(extraMap);
            } else {
                data = new JSONObject();
            }
            setStringData(data, "type", PopupPushActivity.onSysNoticeOpened);
            setStringData(data, "title", title);
            setStringData(data, "content", content);

//            AliyunPush.pushData(data);
            //将获取到的通知数据保存在sp中
            new PushUtils(PopupPushActivity.this).setNoticeJsonData(data.toString());

        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 设定字符串类型JSON对象，如值为空时不设定
     *
     * @param jsonObject JSON对象
     * @param name       关键字
     * @param value      值
     * @throws JSONException JSON异常
     */
    private void setStringData(JSONObject jsonObject, String name, String value) throws JSONException {
        if (value != null && !"".equals(value)) {
            jsonObject.put(name, value);
        }
    }

}