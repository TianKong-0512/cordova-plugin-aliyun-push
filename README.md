## 使用

将本仓库`clone`或下载到本地。

1. 将目录中的`aliyun-push`文件夹复制到**你的项目工程**中的`libs`目录中(无则创建),最终目录格式

   ```
   .
   ├── README.md
   ├── angular.json
   ├── browserslist
   ├── config.xml
   ├── ionic.config.json
   ├── karma.conf.js
   ├── libs
   │   ├── @ionic-native
   │       └── aliyun-push
   ├── package-lock.json
   ├── package.json
   ├── plugins
   ├── src
   ├── tsconfig.app.json
   ├── tsconfig.json
   ├── tsconfig.spec.json
   └── tslint.json
   ```

1. 在`app.module.ts`中声明

```typescript
import { AliyunPush } from "libs/@ionic-native/aliyun-push/ngx";

// <~·····

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AliyunPush, // <~ 声明
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
