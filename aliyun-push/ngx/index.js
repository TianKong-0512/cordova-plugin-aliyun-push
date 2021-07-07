import { __decorate, __extends } from 'tslib';
import { IonicNativePlugin, cordova, ngModule } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * 目标类型
 * 详情参考 阿里云移动推送文档
 */
export var AliyunPushTarget;
(function (AliyunPushTarget) {
  AliyunPushTarget[(AliyunPushTarget['DEVICE_TARGET'] = 1)] = 'DEVICE_TARGET';
  AliyunPushTarget[(AliyunPushTarget['ACCOUNT_TARGET'] = 2)] = 'ACCOUNT_TARGET';
  AliyunPushTarget[(AliyunPushTarget['ALIAS_TARGET'] = 3)] = 'ALIAS_TARGET'; // 别名
})(AliyunPushTarget || (AliyunPushTarget = {}));
var AliyunPush = /** @class */ (function (_super) {
  __extends(AliyunPush, _super);
  function AliyunPush() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AliyunPush.prototype.getRegisterId = function () {
    return cordova(this, 'getRegisterId', {}, arguments);
  };
  AliyunPush.prototype.bindAccount = function (account) {
    return cordova(this, 'bindAccount', {}, arguments);
  };
  AliyunPush.prototype.unbindAccount = function () {
    return cordova(this, 'unbindAccount', {}, arguments);
  };
  AliyunPush.prototype.bindTags = function (target, tags, alias) {
    return cordova(this, 'bindTags', {}, arguments);
  };
  AliyunPush.prototype.unbindTags = function (target, tags, alias) {
    return cordova(this, 'unbindTags', {}, arguments);
  };
  AliyunPush.prototype.listTags = function () {
    return cordova(this, 'listTags', {}, arguments);
  };
  AliyunPush.prototype.requireNotifyPermission = function (msg) {
    return cordova(this, 'requireNotifyPermission', {}, arguments);
  };
  AliyunPush.prototype.onMessage = function () {
    return cordova(this, 'onMessage', { observable: true }, arguments);
  };
  AliyunPush.prototype.addAlias = function (alias) {
    return cordova(this, 'addAlias', {}, arguments);
  };
  AliyunPush.prototype.removeAlias = function (alias) {
    return cordova(this, 'removeAlias', {}, arguments);
  };
  AliyunPush.prototype.listAliases = function () {
    console.log('别名列表 badge');
    return cordova(this, 'listAliases', {}, arguments);
  };
  AliyunPush.prototype.syncBadgeNum = function (number) {
    return cordova(this, 'syncBadgeNum', {}, arguments);
  };
  AliyunPush.prototype.setApplicationIconBadgeNumber = function (number) {
    return cordova(this, 'setApplicationIconBadgeNumber', {}, arguments);
  };
  AliyunPush.pluginName = 'AliyunPush';
  AliyunPush.plugin = 'cordova-plugin-aliyun-push';
  AliyunPush.pluginRef = 'AliyunPush';
  AliyunPush.repo = 'https://github.com/TianKong-0512/cordova-plugin-aliyun-push';
  AliyunPush.platforms = ['Android', 'iOS'];
  AliyunPush.install = '';
  AliyunPush.installVariables = [
    'ANDROID_APP_KEY',
    'ANDROID_APP_SECRET',
    'IOS_APP_KEY',
    'IOS_APP_SECRET',
    'HUAWEI_APPID',
    'MIPUSH_APPID',
    'MIPUSH_APPKEY',
    'VIVOPUSH_APPID',
    'VIVOPUSH_APPKEY',
    'OPPOPUSH_APPKEY',
    'OPPOPUSH_APPSECRET',
    'MZPUSH_APPID',
    'MZPUSH_APPKEY',
  ];
  AliyunPush = __decorate([Injectable()], AliyunPush);
  return AliyunPush;
})(IonicNativePlugin);
export { AliyunPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXl1bi1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx3Q0FBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUE0QmxDOzs7R0FHRztBQUNILE1BQU0sQ0FBTixJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDMUIseUVBQWlCLENBQUE7SUFDakIsMkVBQWtCLENBQUE7SUFDbEIsdUVBQWdCLENBQUEsQ0FBSSxLQUFLO0FBQzNCLENBQUMsRUFKVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSTNCOztJQWdEK0IsOEJBQWlCOzs7O0lBRy9DLGtDQUFhO0lBS2IsZ0NBQVcsYUFBQyxPQUFlO0lBSzNCLGtDQUFhO0lBU2IsNkJBQVEsYUFBQyxNQUF3QixFQUFFLElBQWMsRUFBRSxLQUFjO0lBU2pFLCtCQUFVLGFBQUMsTUFBd0IsRUFBRSxJQUFjLEVBQUUsS0FBYztJQVFuRSw2QkFBUTtJQVNSLDRDQUF1QixhQUFDLEdBQVc7SUFVbkMsOEJBQVM7SUFTVCw2QkFBUSxhQUFDLEtBQWE7SUFTdEIsZ0NBQVcsYUFBQyxLQUFhO0lBUXpCLGdDQUFXOzs7Ozs7OztJQXBGQSxVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBdEZ2QjtFQXNGZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG5pbnRlcmZhY2UgQWxpeXVuTWVzc2FnZU9yaWdpbiB7XG4gIC8qKlxuICAgKiAgbWVzc2FnZTog6YCP5Lyg5raI5oGv77yMXG4gICAqICBub3RpZmljYXRpb246IOmAmuefpeaOpeaUtu+8jFxuICAgKiAgbm90aWZpY2F0aW9uT3BlbmVkOiDpgJrnn6Xngrnlh7vvvIxcbiAgICogIG5vdGlmaWNhdGlvblJlY2VpdmVkOiDpgJrnn6XliLDovr7vvIxcbiAgICogIG5vdGlmaWNhdGlvblJlbW92ZWQ6IOmAmuefpeenu+mZpO+8jFxuICAgKiAgbm90aWZpY2F0aW9uQ2xpY2tlZFdpdGhOb0FjdGlvbjog6YCa55+l5Yiw6L6+77yMXG4gICAqICBub3RpZmljYXRpb25SZWNlaXZlZEluQXBwOiDpgJrnn6XliLDovr7miZPlvIAgYXBwXG4gICAqL1xuICB0eXBlOiAnbWVzc2FnZScgfCAnbm90aWZpY2F0aW9uJyB8ICdub3RpZmljYXRpb25PcGVuZWQnIHwgJ25vdGlmaWNhdGlvblJlY2VpdmVkJyB8ICdub3RpZmljYXRpb25SZW1vdmVkJyB8ICdub3RpZmljYXRpb25DbGlja2VkV2l0aE5vQWN0aW9uJyB8ICdub3RpZmljYXRpb25SZWNlaXZlZEluQXBwJztcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsaXl1bk5vdGlmaWNhdGlvbiBleHRlbmRzIEFsaXl1bk1lc3NhZ2VPcmlnaW4ge1xuICBfQUxJWVVOX05PVElGSUNBVElPTl9JRF8/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFsaXl1bk1lc3NhZ2UgZXh0ZW5kcyBBbGl5dW5NZXNzYWdlT3JpZ2luIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIFtwcm9wOiBzdHJpbmddOiBhbnk7ICAvLyDlkI7lj7DmjqjpgIHnmoQgRXh0UGFyYW1ldGVycyDlrZfmrrUs5bey6L2s5Li6IGtleS12YWx1ZSDlvaLlvI9cbn1cblxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9IEFsaXl1bk5vdGlmaWNhdGlvbiB8IEFsaXl1bk1lc3NhZ2U7XG5cbi8qKlxuICog55uu5qCH57G75Z6LXG4gKiDor6bmg4Xlj4LogIMg6Zi/6YeM5LqR56e75Yqo5o6o6YCB5paH5qGjXG4gKi9cbmV4cG9ydCBlbnVtIEFsaXl1blB1c2hUYXJnZXQge1xuICBERVZJQ0VfVEFSR0VUID0gMSwgIC8vIOacrOiuvuWkh1xuICBBQ0NPVU5UX1RBUkdFVCA9IDIsIC8vIOacrOi0puWPt1xuICBBTElBU19UQVJHRVQgPSAzICAgIC8vIOWIq+WQjVxufVxuXG5cbi8qXG4qIEBuYW1lIEFsaXl1biBQdXNoXG4qIEBkZXNjcmlwdGlvblxuKiDpmL/ph4zkupHmjqjpgIFcbipcbipcbiogQHVzYWdlXG4qIGBgYHR5cGVzY3JpcHRcbiogaW1wb3J0IHsgQWxpeXVuUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYWxpeXVuLXB1c2gvbmd4JztcbiogQE5nTW9kdWxlKHtcbiogICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuKiAgIGVudHJ5Q29tcG9uZW50czogW10sXG4qICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIElvbmljTW9kdWxlLmZvclJvb3QoKSwgQXBwUm91dGluZ01vZHVsZV0sXG4qICAgcHJvdmlkZXJzOiBbXG4qICAgICBTdGF0dXNCYXIsXG4qICAgICBTcGxhc2hTY3JlZW4sXG4qICAgICB7IHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSwgdXNlQ2xhc3M6IElvbmljUm91dGVTdHJhdGVneSB9LFxuKiAgICAgQWxpeXVuUHVzaCAgPH5+fn4g5a6a5LmJXG4qICAgXSxcbiogICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG4qIH0pXG4qIGBgYFxuXG4qIGBgYHR5cGVzY3JpcHRcbiogaW1wb3J0IHsgQWxpeXVuUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYWxpeXVuLXB1c2gvbmd4JztcbiogY29uc3RydWN0b3IocHJpdmF0ZSBhbGl5dW5QdXNoOiBBbGl5dW5QdXNoKSB7IH1cbiogLi4uXG4qIHRoaXMuYWxpeXVuUHVzaC5vbk1lc3NhZ2UoKVxuKiAuc3Vic2NyaWJlKChtc2cpID0+IHtcbiogICBjb25zb2xlLmxvZyhtc2cpO1xuKiB9LCBjb25zb2xlLmVycm9yKTtcbiogYGBgXG4qL1xuXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWxpeXVuUHVzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFsaXl1bnB1c2gnLFxuICBwbHVnaW5SZWY6ICdBbGl5dW5QdXNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb2cyYy9jb3Jkb3ZhLXBsdWdpbi1hbGl5dW5wdXNoLmdpdCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxuICBpbnN0YWxsOiAnJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX0FQUF9LRVknLCAnQU5EUk9JRF9BUFBfU0VDUkVUJywgJ0lPU19BUFBfS0VZJywgJ0lPU19BUFBfU0VDUkVUJywgJ0hVQVdFSV9BUFBJRCcsICdNSVBVU0hfQVBQSUQnLCAnTUlQVVNIX0FQUEtFWSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGl5dW5QdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmVnaXN0ZXJJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYmluZEFjY291bnQoYWNjb3VudDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHVuYmluZEFjY291bnQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICog6Zi/6YeM5LqR5o6o6YCB57uR5a6a5qCH562+XG4gICAqIEBwYXJhbSB0YWdzIOagh+etvuWIl+ihqFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBiaW5kVGFncyh0YXJnZXQ6IEFsaXl1blB1c2hUYXJnZXQsIHRhZ3M6IHN0cmluZ1tdLCBhbGlhcz86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIOmYv+mHjOS6keaOqOmAgeino+mZpOe7keWumuagh+etvlxuICAgKiBAcGFyYW0gIHtzdHJpbmdbXX0gdGFncyAg5qCH562+5YiX6KGoXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuYmluZFRhZ3ModGFyZ2V0OiBBbGl5dW5QdXNoVGFyZ2V0LCB0YWdzOiBzdHJpbmdbXSwgYWxpYXM/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiDpmL/ph4zkupHmjqjpgIHop6PpmaTnu5HlrprmoIfnrb5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbGlzdFRhZ3MoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiDmsqHmnInmnYPpmZDml7bvvIzor7fmsYLlvIDpgJrpgJrnn6XmnYPpmZDvvIzlhbbku5bot6/ov4dcbiAgICogQHBhcmFtICBzdHJpbmcgbXNnICDor7fmsYLmnYPpmZDnmoTmj4/ov7Dkv6Hmga9cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWlyZU5vdGlmeVBlcm1pc3Npb24obXNnOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiDpmL/ph4zkupHmjqjpgIHmtojmga/pgI/kvKDlm57osINcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uTWVzc2FnZSgpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICog5re75Yqg5Yir5ZCNXG4gICAqIEBwYXJhbSB0YWdzIOagh+etvuWIl+ihqFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRBbGlhcyhhbGlhczogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICog56e76Zmk5Yir5ZCNXG4gICAqIEBwYXJhbSBhbGlhcyDmoIfnrb7liJfooahcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlQWxpYXMoYWxpYXM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIOafpeivouW3suazqOWGjOWIq+WQjVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsaXN0QWxpYXNlcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==
