package com.alipush;

import android.app.Application;

import android.app.ActivityManager;
import android.content.pm.PackageManager;
import static com.alipush.PushUtils.initPushService;

import android.content.Context;
import android.util.Log;

public class PushApplication extends Application {


    private String name;

    @Override
    public void onCreate() {
        super.onCreate();
        try {
            initPushService(this);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
    }


}
