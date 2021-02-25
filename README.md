# cordova-plugin-aliyunpush

基于 https://github.com/442623641/cordova-plugin-aliyunpush 修改而来

Cordova 阿里云移动推送插件，现只包含`MiPush`、`Huawei`两个厂商辅助通道,`FCM`、`OPPO`等后续再补充

## 依赖说明

- Android:

  ```groovy
  dependencies {
      implementation 'com.aliyun.ams:alicloud-android-push:3.1.6'
      // 三方辅助通道
      implementation 'com.aliyun.ams:alicloud-android-third-push:3.0.10@aar'
      // 华为
      implementation 'com.aliyun.ams:huawei-push:2.6.3.305'
      implementation 'com.aliyun.ams:huawei-push-base:2.6.3.305'
  }

  ```

- iOS:
  截止日期`2020/03/05`为止最新的依赖

## 安装

- 安装插件

  ```bash
    cordova plugin add cordova-plugin-aliyun-push \
    --variable ANDROID_APP_KEY="***" \
    --variable ANDROID_APP_SECRET="***" \
    --variable IOS_APP_KEY="***" \
    --variable IOS_APP_SECRET="***" \
    --variable HUAWEI_APPID="***" \
    --variable MIPUSH_APPID="***" \
    --variable MIPUSH_APPKEY="***" \
    --variable CHANNEL_ID="0"
  ```

  - 注意
    - 将`*`号替换成你自己申请的密钥信息,如无则不填写或保持`*`号(不影响正常运行)
    - `CHANNEL_ID`对应`Android 8.0`的通知通道,根据实际情况填写(`Android`开发者都懂什么意思)

- `Android`端配置(必要)

    <div style="color:red">**插件默认没有阿里云推送初始化,所以要依据下列两种方式(2选1)进行初始化**</div>

  1. (**推荐**)在你项目的`config.xml`中添加

     ```xml
         <platform name="android">
             <!-- ↓↓↓↓↓↓↓ 以下内容 ↓↓↓↓↓↓↓ -->
             <edit-config file="app/src/mainAndroidManifest.xml" mode="merge" target="manifest/application"
                     xmlns:android="http://schemas.androidcom/apk/res/android">
                     <application android:name="com.alipush.PushApplication" />
             </edit-config>
             <!-- ↑↑↑↑↑↑↑ 以上内容 ↑↑↑↑↑↑↑ -->
         </platform>
     ```

  2. 若你已经自定义了`Application`,则只要在你的`Application`中调用

     ```java
         import static com.alipush.PushUtils.initPushService;
         //start
         @Override
             public void onCreate() {
                 super.onCreate();
                 try {
                     initPushService(this);
                 } catch (PackageManager.NameNotFoundException e) {
                     e.printStackTrace();
                 }
             }
         //end
     ```

## 使用

### `ionic`中使用(可选)

为`typescript`大法好添加了`ts`声明,需要的可以根据下列步骤操作

1. 根据上面步骤添加`plugin`

### API

```
    /**
     * 获取设备唯一标识deviceId，deviceId为阿里云移动推送过程中对设备的唯一标识（并不是设备UUID/UDID）
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    getRegisterId: function(successCallback, errorCallback)

    /**
     * 阿里云推送绑定账号名
     * @param  {string} account         账号
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    bindAccount: function(account, successCallback, errorCallback)

    /**
     * 阿里云推送解除账号名,退出或切换账号时调用
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    unbindAccount: function(successCallback, errorCallback)

    /**
     * 阿里云推送绑定标签
     * @param  {string[]} tags            标签列表
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    bindTags: function(tags, successCallback, errorCallback)

    /**
     * 阿里云推送解除绑定标签
     * @param  {string[]} tags            标签列表
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    unbindTags: function(tags, successCallback, errorCallback)

    /**
     * 阿里云推送解除绑定标签
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    listTags: function(successCallback, errorCallback)

    /**
     * 添加别名
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    addAlias: function (alias, successCallback, errorCallback)

    /**
     * 解绑别名
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    removeAlias: function (alias, successCallback, errorCallback)

    /**
     * 删除别名
     * @param  {Function} successCallback 成功回调
     * @param  {Function} errorCallback   失败回调
     * @return {void}
     */
    listAliases: function (successCallback, errorCallback)

    /**
      * 没有权限时，请求开通通知权限，其他路过
      * @param  string msg  请求权限的描述信息
      * @param {} successCallback
      * @param {*} errorCallback
      */
    requireNotifyPermission:function(msg,successCallback, errorCallback)

    /**
    * 阿里云推送消息透传回调
    * @param  {Function} successCallback 成功回调
    */
    onMessage:function(sucessCallback) ;

    # sucessCallback:调用成功回调方法，注意没有失败的回调，返回值结构如下：
    #json: {
      type:string 消息类型,
      title:string '阿里云推送',
      content:string '推送的内容',
      extra:string | Object<k,v> 外健,
      url:路由（后台发送推送时，在ExtParameters参数里写入url如{url:'demoapp://...'}）
    }

    #消息类型
    {
      message:透传消息，
      notification:通知接收，
      notificationOpened:通知点击，
      notificationReceived：通知到达，
      notificationRemoved：通知移除，
      notificationClickedWithNoAction：通知到达，
      notificationReceivedInApp：通知到达打开 app
    }

```

## 常见问题

1. `Android 8.0`以上无法获取到`Token`
   检查是否配置了`network_security_config.xml`信息，具体百度了解

1. `iOS`无法获取到`Token`
   `Xcode`中确认开启以下两项
   ![]()
