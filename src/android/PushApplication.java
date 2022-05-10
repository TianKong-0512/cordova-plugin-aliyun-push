package com.alipush;

import android.app.Application;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import static com.alipush.PushUtils.initPushService;
import static com.alipush.PushUtils.getCurrentProcessName;

import android.util.Log;

public class PushApplication extends Application {
    public static final String TAG = PushApplication.class.getSimpleName();
    private static PushApplication instance;
    private static String ChannelProcessName = "自己的应用包名:channel";
    public static boolean CordovaInit = true;
    
    @Override
    public void onCreate() {
        super.onCreate();
        this.instance = this;
        // 初始化 SharedPreferences
        SharedPreferences shared= getSharedPreferences("isFirst", MODE_PRIVATE);
        // 获取是否是第一次初始化
        boolean isFirst = shared.getBoolean("isFirst", true);
        CordovaInit = isFirst;
        String processName = getCurrentProcessName(this);
        if(processName.equals(ChannelProcessName) || !isFirst){
            // 当 Channel 进程初始化时 修改 isFirst
            SharedPreferences.Editor editor = shared.edit();
            editor.putBoolean("isFirst", false);
            editor.commit();
            this.initPush("PushApplication");
        }

    }


    public static void initPush(String name) {
        try {
            if(!(CordovaInit) && "AliyunPush".equals(name)){
                return;
            }
            initPushService(PushApplication.instance);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
    }

}
