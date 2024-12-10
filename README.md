# ContiNew Admin UI

<a href="https://github.com/Charles7c/continew-admin-ui/blob/dev/LICENSE" target="_blank">
<img src="https://img.shields.io/badge/License-Apache--2.0-blue.svg" alt="License" />
</a>
<a href="https://github.com/Charles7c/continew-admin-ui" target="_blank">
<img src="https://img.shields.io/badge/RELEASE-v3.4.1-%23ff3f59.svg" alt="Release" />
</a>
<a href="https://github.com/Charles7c/continew-admin" target="_blank">
<img src="https://img.shields.io/github/stars/Charles7c/continew-admin?style=social" alt="GitHub stars" />
</a>
<a href="https://github.com/Charles7c/continew-admin" target="_blank">
<img src="https://img.shields.io/github/forks/Charles7c/continew-admin?style=social" alt="GitHub forks" />
</a>
<a href="https://gitee.com/continew/continew-admin" target="_blank">
<img src="https://gitee.com/continew/continew-admin/badge/star.svg?theme=white" alt="Gitee stars" />
</a>
<a href="https://gitee.com/continew/continew-admin" target="_blank">
<img src="https://gitee.com/continew/continew-admin/badge/fork.svg?theme=white" alt="Gitee forks" />
</a>
<a href="https://github.com/Charles7c/continew-admin-ui" target="_blank">
<img src="https://img.shields.io/badge/Vue-3.5.4-%236CB52D.svg" alt="Release" />
</a>
<a href="https://github.com/Charles7c/continew-admin-ui" target="_blank">
<img src="https://img.shields.io/badge/Arco Design Vue-2.56.0-%236CB52D.svg" alt="Release" />
</a>
<a href="https://github.com/Charles7c/continew-admin-ui" target="_blank">
<img src="https://img.shields.io/badge/TypeScript-5.0.4-%236CB52D.svg" alt="Release" />
</a>
<a href="https://github.com/Charles7c/continew-admin-ui" target="_blank">
<img src="https://img.shields.io/badge/Vite-5.1.5-%236CB52D.svg" alt="Release" />
</a>

📚 [在线文档](https://continew.top) | 🚀 [演示地址](https://admin.continew.top)（账号/密码：admin/admin123）

## 简介

全新 3.0 版本，基于 Gi Demo 前端模板开发的 ContiNew Admin 前端适配项目。

ContiNew Admin（Continue New Admin）持续迭代优化的前后端分离中后台管理系统框架。开箱即用，重视每一处代码规范，重视每一种解决方案细节，持续提供舒适的前、后端开发体验。

当前采用的技术栈：Spring Boot3（Java17）、Vue3 & Arco Design & TS & Vite、Sa-Token、MyBatis Plus、Redisson、JetCache、JustAuth、Crane4j、EasyExcel、Liquibase、Hutool 等。

## 项目源码

|         | 前端                                                         | 后端                                                         |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Gitee   | [continew/continew-admin-ui](https://gitee.com/continew/continew-admin-ui) | [continew/continew-admin](https://gitee.com/continew/continew-admin) |
| GitCode | [continew/continew-admin-ui](https://gitcode.com/continew/continew-admin-ui) | [continew/continew-admin](https://gitcode.com/continew/continew-admin) |
| GitHub  | [continew-org/continew-admin-ui](https://github.com/continew-org/continew-admin-ui) | [continew-org/continew-admin](https://github.com/continew-org/continew-admin) |

## 项目起源

我热衷于做数据归档，归档后的数据可以提高学习/工作效率，为记忆“减负”，在持续的数据归档中，优质的“沉淀”会带来非匀速、跨越式的学习/工作体验。**数据归档是一件需要持续去做的事情**。

从接触程序代码的第一天，我的程序数据归档也随之开始了，刷过的算法题、笔记、对接各种组件的配置文件，甚至于一些亮眼的样式设计、“如诗”的代码片段。这些数据的沉淀丰富了我的解决方案，提高了我的编程效率，逐渐为各种场景落实成了一个个雏形程序。再后来，我意识到，我归档的这些雏形程序，有一个更为妥贴的名称：**程序框架/脚手架**。

技术的发展，导致这些雏形程序的生命周期很是短暂，它们有别于我归档的其他数据，有时由于工作的原因，没有时间很好的去沉淀它们，在使用时变得越来越不顺手。所以，某段时间，我放弃了维护，而是去采用一些更为成熟的框架。

不过，在陆续几年使用了一些成熟框架后，我前后遇到了一些困难：

1. 代码洁癖想要找到一个**扩展性佳，代码规范良好，开发体验舒适**的框架很不容易，总是差些什么
2. 项目上手困难或是基础版功能不全，需要的全在专业版，亦或者代码阅读性差，文档收费
3. 部分解决方案缺失，已有解决方案也过于偏向样板化，无法形成良好的逻辑闭环
4. 好不容易找到一些相较合适的，没过多久，部分作者可能暂时没法对外发“电”了，随着了解深入，很多 Bug 或新技术趋势还是需要自己研究解决

在工作中，很多想法/设计受限于客户需求、开发工期，必须优先以交付为导向，但一些优秀的实践需要花时间持续进行沉淀，只要我没跳出这个圈子，我还是需要一直去做好程序归档。“种一棵树最好的时间是十年前，其次是现在”，最终，我选择在业余时间更加正视这件事，从头归档沉淀，从添加每一个依赖开始，我希望它能持续的迭代优化、演进，所以我把它命名为 **ContiNew（Continue New）**。并且这次我选择了开源，我希望它不仅仅能吸收我的需求和沉淀，而是依托开源协作模式，及时发现更多的问题，接受更多的可能性，沉淀更优秀的思考，设计。

## 为什么选我们？

> [!TIP]
> 更为完整的图文描述请查阅[《在线文档》](https://continew.top/admin/intro/why.html)。

1.**甄选技术栈：** ContiNew（Continue New） 项目致力于持续迭代优化，让技术不掉队。在技术选型时，进行深度广泛地调研，从流行度、成熟度和发展潜力等多方面甄选技术栈。

2.**Starter 组件：** 从 v2.1.0 版本开始，抽取并封装后端基础组件及各框架集成配置到 ContiNew Starter 项目，且 **[已发布至 Maven 中央仓库](https://central.sonatype.com/search?q=continew-starter&namespace=top.continew)**，可在你的任意项目中直接引入所需依赖使用。即使你不用脚手架项目，难道能让你搭项目框架更快、更爽、更省力的 Starter 也要 Say No 吗？

3.**CRUD 套件：** 封装通用增删改查套件，适配后端各分层，几分钟即可提供一套 CRUD API，包括新增、修改、批量删除、查询详情、分页列表查询、全部列表查询、树型列表查询、导出到 Excel，且 API 支持按实际所需开放或扩展。
```java
@Tag(name = "部门管理 API")
@RestController
@CrudRequestMapping(value = "/system/dept", api = {Api.TREE, Api.DETAIL, Api.ADD, Api.UPDATE, Api.DELETE, Api.EXPORT})
public class DeptController extends BaseController<DeptService, DeptResp, DeptDetailResp, DeptQuery, DeptReq> {}
```

4.**代码生成器：** 提供代码生成器，已配套前、后端代码生成模板，数据表设计完之后，简单配置一下即可生成前、后端 80% 的代码，包含 CRUD API、权限控制、参数校验、接口文档等内容。如果业务不复杂，也可能就是 95% 的代码。

5.**改善开发体验：** 持续优化及适配能改善开发体验的组件。
- 适配 ContiNew Starter 组件，针对多数框架进行了深度封装的 starter，改善你在开发每个 Spring Boot Web 项目的体验。
- 适配 Crane4j 数据填充组件，减少因为一个用户名而产生的联表回填；
- 适配 P6Spy SQL 性能分析组件，开发期间方便监控 SQL 执行；
- 适配 TLog 链路追踪组件，方便在杂乱的日志文件中追踪你某次请求的日志记录；
- 适配 JetCache 缓存框架（比 Spring Cache 更强大易用），通过注解声明即可快速实现方法级缓存，极大改善编码式缓存体验，且支持灵活的二级缓存配置、分布式自动刷新等能力；
- 前端适配 Vue Devtools（Vue 官方提供的调试浏览器插件），极大提高 Vue 开发及调试效率

6.**Almost最佳后端规范：** 后端严格遵循阿里巴巴 Java 编码规范，注释覆盖率 > 45%，接口参数示例 100%，代码分层使用体验佳，变量、方法命名清晰统一，前端代码也使用严格的 ESLint、StyleLint 等检查。良好的设计，代码复用率极高！写代码时，让你有一种无需多写，理应如此的感觉。我是代码洁癖，我实际写的时候很清楚这到底是不是乱吹。

7.**卓越工程：** 后端采用模块化工程结构，并适配了统一项目版本号、编译项目自动代码格式化、代码混淆等插件，提供了自定义打包部署结构配置（配置文件、三方依赖和主程序分离），提供全套环境及应用的 Docker Compose 部署脚本。为了减少您开发新项目时的改造耗时，项目品牌配置持续进行深度聚合，简单的配置和结构修改即可快速开始独属于你的新项目。

8.**业务脚手架：** 有颜有料，不止是说说而已，持续打磨 UI 设计与色彩主题。提供基于 RBAC 的权限控制、通用数据权限，包含丰富的通用业务功能：第三方登录，邮箱、短信（生产级炸弹漏洞处理方案），个人中心、用户管理、角色管理、部门管理、系统配置（基础站点配置、邮件配置、安全配置）、系统日志、消息中心、通知公告等，设计用心，逻辑合理闭环。
> 一个好的脚手架项目，不仅仅是提供一系列组件集成与配置，也不仅仅是封装一堆好用的工具，还更应该提供一系列通用基础业务解决方案及设计，为初创团队项目减负。

9.**质量与安全：** CI 已集成 Sonar、Codacy，Push 即扫描代码质量，定期扫描 CVE 漏洞，及时解决潜在问题。封装数据库字段加密、JSON 脱敏、XSS 过滤等工具，提供诸多安全解决方案。

由于篇幅有限，且项目正处于高速发展期，更多功能正在陆续上线（敬请关注仓库或群内动态）。另外像最基本的统一异常、错误处理，基础线程池等配置就不在此赘述，细节优化详情请 clone 代码查看。
> Talk is cheap, show the code.

##  系统功能

> [!TIP]
> 更多功能和优化正在赶来💦，最新项目计划、进展请进群或关注 [任务清单](https://continew.top/admin/intro/require.html#任务清单) 和 [更新日志](https://continew.top/admin/other/changelog.html)。

- 仪表盘：提供工作台、分析页，工作台提供功能快捷导航入口、最新公告、动态；分析页提供全面数据可视化能力
- 个人中心：支持基础信息修改、密码修改、邮箱绑定、手机号绑定（并提供行为验证码、短信限流等安全处理）、第三方账号绑定/解绑、头像裁剪上传
- 消息中心：提供站内信消息统一查看、标记已读、全部已读、删除等功能（目前仅支持系统通知消息）
- 用户管理：管理系统用户，包含新增、修改、删除、导入、导出、重置密码、分配角色等功能

- 角色管理：管理系统用户的功能权限及数据权限，包含新增、修改、删除、分配角色等功能

- 菜单管理：管理系统菜单及按钮权限，支持多级菜单，动态路由，包含新增、修改、删除等功能

- 部门管理：管理系统组织架构，包含新增、修改、删除、导出等功能，以树形列表进行展示

- 字典管理：管理系统公用数据字典，例如：消息类型。支持字典标签背景色和排序等配置

- 通知公告：管理系统公告，支持设置公告的生效时间、终止时间、通知范围（所有人、指定用户）

- 文件管理：管理系统文件，支持上传、下载、预览（目前支持图片、音视频、PDF、Word、Excel、PPT）、重命名、切换视图（列表、网格）等功能

- 存储管理：管理文件存储配置，支持本地存储、兼容 S3 协议存储

- 系统配置：
  - 基础配置：提供修改系统标题、Logo、favicon、版权信息等基础配置功能，以方便用户系统与其自身品牌形象保持一致
  - 邮件配置：提供系统发件箱配置，也支持通过配置文件指定
  - 安全配置：提供密码策略修改，支持丰富的密码策略设定，包括但不限于 `密码有效期`、`密码重复次数`、`密码错误锁定账号次数、时间` 等

- 在线用户：管理当前登录用户，可一键踢除下线

- 日志管理：管理系统登录日志、操作日志，支持查看日志详情，包含请求头、响应头等报文信息

- 任务管理：管理系统定时任务，包含新增、修改、删除、执行功能，支持 Cron（可配置式生成 Cron 表达式） 和固定频率

- 任务日志：管理定时任务执行日志，包含停止、重试指定批次，查询集群各节点的详细输出日志等功能

- 应用管理：管理第三方系统应用 AK、SK，包含新增、修改、删除、查看密钥、重置密钥等功能，支持设置密钥有效期

- 代码生成：提供根据数据库表自动生成相应的前后端 CRUD 代码的功能，支持同步最新表结构及代码生成预览

## 系统截图

> [!TIP]
> 受篇幅长度及功能更新频率影响，下方仅为系统 **部分** 功能于 **2024年11月18日** 进行的截图，更多新增功能及细节请登录演示环境或 clone 代码到本地启动查看。

<table border="1" cellpadding="1" cellspacing="1" style="width: 500px">
    <tbody>
        <tr>
            <td><img src=".image/screenshot/000登录页面.png" alt="登录页面" width="1920" /></td>
            <td><img src=".image/screenshot/000登录页面-H5.png" alt="登录页面-H5" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/001仪表盘.png" alt="仪表盘" width="1920" /></td>
            <td><img src=".image/screenshot/002分析页.png" alt="分析页" width="1920" /></td>
        </tr>
       <tr>
            <td><img src=".image/screenshot/010个人中心.png" alt="个人中心" width="1920" /></td>
            <td><img src=".image/screenshot/013消息中心.png" alt="消息中心" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/011安全设置-修改邮箱.png" alt="安全设置-修改邮箱" width="1920" /></td>
            <td><img src=".image/screenshot/012安全设置-修改邮箱-邮箱验证码.png" alt="安全设置-修改邮箱-邮箱验证码" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/060系统管理-系统配置.png" alt="系统管理-系统配置" width="1920" /></td>
            <td><img src=".image/screenshot/061系统管理-安全配置.png" alt="系统管理-安全配置" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/020系统管理-用户管理-列表.png" alt="系统管理-用户管理-列表" width="1920" /></td>
            <td><img src=".image/screenshot/021系统管理-用户管理-新增.png" alt="系统管理-用户管理-新增" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/025系统管理-角色管理-列表.png" alt="系统管理-角色管理-列表" width="1920" /></td>
            <td><img src=".image/screenshot/026系统管理-角色管理-新增.png" alt="系统管理-角色管理-新增" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/030系统管理-菜单管理-列表.png" alt="系统管理-菜单管理-列表" width="1920" /></td>
            <td><img src=".image/screenshot/031系统管理-菜单管理-新增.png" alt="系统管理-菜单管理-新增" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/045系统管理-公告管理-列表.png" alt="系统管理-公告管理-列表" width="1920" /></td>
            <td><img src=".image/screenshot/046系统管理-公告管理-修改.png" alt="系统管理-公告管理-修改" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/040系统管理-字典管理-列表.png" alt="系统管理-字典管理-列表" width="1920" /></td>
            <td><img src=".image/screenshot/041系统管理-字典项管理.png" alt="系统管理-字典项管理" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/051系统管理-文件管理-列表-2.png" alt="系统管理-文件管理-列表-2" width="1920" /></td>
            <td><img src=".image/screenshot/052系统管理-文件管理-查看文档.png" alt="系统管理-文件管理-查看文档" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/301系统工具-代码生成-配置.png" alt="系统工具-代码生成-配置" width="1920" /></td>
            <td><img src=".image/screenshot/302系统工具-代码生成-预览.png" alt="系统工具-代码生成-预览" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/100系统监控-在线用户.png" alt="系统监控-在线用户" width="1920" /></td>
            <td><img src=".image/screenshot/101系统监控-系统日志-登录日志.png" alt="系统监控-系统日志-登录日志" width="1920" /></td>
        </tr>
        <tr>
            <td><img src=".image/screenshot/102系统监控-系统日志-操作日志.png" alt="系统监控-系统日志-操作日志" width="1920" /></td>
            <td><img src=".image/screenshot/103系统监控-系统日志-操作日志-详情.png" alt="系统监控-系统日志-操作日志-详情" width="1920" /></td>
        </tr>
    </tbody>
</table>

## 快速开始

> **Note**
> 更详细的流程，请查看在线文档[《快速开始》](https://continew.top/admin/intro/quick-start.html#%E5%89%8D%E7%AB%AF)。

```
# 1.克隆本项目
git clone https://github.com/charles7c/continew-admin-ui.git
git clone https://gitee.com/continew/continew-admin-ui.git

# 2.在 IDE（Visual Studio Code/WebStorm）中打开前端项目 continew-admin-ui

# 3.安装 pnpm
npm install -g pnpm

# 4.安装依赖
pnpm i

# 5.启动程序
# 5.1 启动成功：访问 http://localhost:5173/
pnpm dev
```

## 项目结构

```
continew-admin-ui
├─ config              # Vite 插件配置
├─ public              # 公共静态资源（favicon.ico、logo.svg）
├─ src
│  ├─ apis             # 请求接口
│  │  ├─ auth            # 认证模块
│  │  ├─ code            # 代码生成模块
│  │  ├─ common          # 公共模块
│  │  ├─ monitor         # 系统监控模块
│  │  ├─ open            # 能力开放模块
│  │  ├─ schedule        # 任务调度模块
│  │  └─ system          # 系统管理模块
│  ├─ assets           # 静态资源
│  │  ├─ icons           # 图标资源
│  │  ├─ images          # 图片资源
│  │  └─ fonts           # 字体资源
│  ├─ components       # 通用业务组件
│  ├─ config           # 全局配置（包含 echarts 主题）
│  │  └─ settings.json   # 配置文件
│  ├─ directives       # 指令集（如需，可自行补充）
│  ├─ hooks            # 全局 hooks
│  ├─ layout           # 布局
│  ├─ mock             # 模拟数据
│  ├─ router           # 路由配置
│  ├─ stores           # 状态管理中心
│  ├─ types            # TypeScript 类型
│  ├─ utils            # 工具库（mock 全局开启/关闭）
│  ├─ views            # 页面
│  │  ├─ code            # 代码生成
│  │  │  └─ generator      # 代码生成
│  │  ├─ dashboard       # 仪表盘
│  │  │  ├─ analysis       # 分析页
│  │  │  └─ workplace      # 工作台
│  │  ├─ default         # 默认页面
│  │  ├─ login           # 登录模块
│  │  ├─ monitor         # 系统监控
│  │  │  ├─ log            # 系统日志
│  │  │  │  ├─ login         # 登录日志
│  │  │  │  └─ operation     # 操作日志
│  │  │  └─ online           # 在线用户
│  │  ├─ open            # 能力开放
│  │  │ └─ user            # 应用管理
│  │  ├─ setting         # 设置
│  │  │  ├─ profile        # 个人中心
│  │  │  └─ message        # 消息中心
│  │  └─ system          # 系统管理
│  │    ├─ config          # 系统配置
│  │    ├─ dept            # 部门管理
│  │    ├─ dict            # 字典管理
│  │    ├─ file            # 文件管理
│  │    ├─ menu            # 菜单管理
│  │    ├─ notice          # 通知公告
│  │    ├─ role            # 角色管理
│  │    ├─ storage         # 存储管理
│  │    └─ user            # 用户管理
│  ├─ App.vue
│  └─ main.ts
├─ .env.development    # 开发环境配置
├─ .env.production     # 生产环境配置
├─ .env.test           # 测试环境配置
├─ eslint.config.js    # ESLint 配置
├─ index.html
├─ package.json
├─ package-lock.json
├─ pnpm-lock.yaml
├─ tsconfig.json
├─ vite.config.ts
├─ .gitignore（Git 忽略文件相关配置文件）
├─ .github（GitHub 相关配置目录，实际开发时直接删除）
├─ .idea
│  └─ icon.png（IDEA 项目图标，实际开发时直接删除）
├─ .image（截图目录，实际开发时直接删除）
├─ .vscode（VSCode 配置目录）
├─ LICENSE（开源协议文件）
├─ CHANGELOG.md（更新日志文件，实际开发时直接删除）
└─ README.md（项目 README 文件，实际开发时替换为真实内容）
```

## 贡献指南

ContiNew Admin 致力于提供开箱即用，持续舒适的开发体验。作为一个开源项目，Creator 的初心是希望 ContiNew Admin 依托开源协作模式，提升技术透明度、放大集体智慧、共创优秀实践，源源不断地为企业级项目开发提供助力。

我们非常欢迎广大社区用户为 ContiNew Admin **贡献（开发，测试、文档、答疑等）** 或优化代码，欢迎各位感兴趣的小伙伴儿，[添加微信](https://continew.top/support.html) 讨论或认领任务。

### 分支说明

ContiNew Admin 的分支目前分为下个大版本的开发分支和上个大版本的维护分支，PR 前请注意对应分支是否处于维护状态，版本支持情况请查看 [更新日志/版本支持](https://continew.top/admin/other/changelog.html#%E7%89%88%E6%9C%AC%E6%94%AF%E6%8C%81)。

| 分支  | 说明                                                         |
| ----- | ------------------------------------------------------------ |
| dev   | 开发分支，默认为下个大版本的 SNAPSHOT 版本，接受新功能或新功能优化 PR |
| x.x.x | 维护分支，在 vx.x.x 版本维护期终止前（一般为下个大版本发布前），用于修复上个版本的 Bug，只接受已有功能修复，不接受新功能 PR |

### 贡献代码

如果您想提交新功能或优化现有代码，可以按照以下步骤操作：

1. 首先，在 Gitee 或 GitHub 上将项目 fork 到您自己的仓库
2. 然后，将 fork 过来的项目（即您的项目）克隆到本地
3. 切换到当前仍在维护的分支（请务必充分了解分支使用说明，可进群联系维护者确认）
4. 开始修改代码，修改完成后，将代码 commit 并 push 到您的远程仓库
5. 在 Gitee 或 GitHub 上新建 pull request（pr），选择好源和目标，按模板要求填写说明信息后提交即可（多多参考 [已批准合并的 pr 记录](https://github.com/Charles7c/continew-admin-ui/pulls?q=is%3Apr+is%3Amerged)，会大大增加批准合并率）
6. 最后，耐心等待维护者合并您的请求即可

请记住，如果您有任何疑问或需要帮助，我们将随时提供支持。

> [!IMPORTANT]
> 欢迎大家为 ContiNew Admin 贡献代码，我们非常感谢您的支持！为了更好地管理项目，维护者有一些要求：
>
> 1. 请确保代码、配置文件的结构和命名规范良好，完善的代码注释
> 2. 在提交代码前，请按照 [Angular 提交规范](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) 编写 commit 的 message

## 反馈交流

欢迎各位小伙伴儿扫描下方二维码加入项目交流群，与项目维护团队及其他大佬用户实时交流讨论。

<div align="left">
  <img src=".image/qrcode.jpg" alt="二维码" height="230px" />
</div>

## 鸣谢

### 鸣谢

感谢参与贡献的每一位小伙伴🥰

<a href="https://github.com/Charles7c/continew-admin/graphs/contributors">
	<img src="https://contrib.rocks/image?repo=Charles7c/continew-admin" />
</a>

### 特别鸣谢

- 感谢 <a href="https://www.jetbrains.com/" target="_blank">JetBrains</a> 提供的 <a href="https://jb.gg/OpenSourceSupport" target="_blank">非商业开源软件开发授权</a>
- 感谢 [Gi Demo ](https://gitee.com/lin0716/gi-demo) 开箱即用的 Vue 中后台管理系统前端模板
- 感谢项目使用或未使用到的每一款开源组件，致敬各位开源先驱 :fire:

## License

- 遵循 <a href="https://github.com/Charles7c/continew-admin-ui/blob/dev/LICENSE" target="_blank">Apache-2.0</a> 开源许可协议
- Copyright © 2022-present <a href="https://blog.charles7c.top" target="_blank">Charles7c</a>
