# Vue生命周期

每个 Vue 实例（每个组件也都是一个实例）都有一个完整的生命周期：

1. 开始创建（空实例）
2. 初始化数据（beforeCreate\created）
3. 编译模板
4. 挂载 DOM
5. 渲染、更新数据 => 重新渲染（beforeMount\mounted）
6. 卸载

这一系列过程我们称之为Vue的生命周期。

各个生命周期的作用

| 生命周期      | 执行时机                                                     |
| ------------- | :----------------------------------------------------------- |
| beforeCreate  | 在组件实例被创建之初、组件的属性生效之前被调用               |
| created       | 在组件实例已创建完毕。此时属性也已绑定，但真实DOM还未生成，$el 还不可用 |
| beforeMount   | 在组件挂载开始之前被调用。相关的render函数首次被调用         |
| mounted       | 在 $el 被新建的 vm.$el 替换并挂载到实例上之后被调用          |
| beforeUpdate  | 在组件数据更新之前调用。发生在虚拟DOM打补丁之前              |
| updated       | 在组件数据更新之后被调用                                     |
| activited     | 在组件被激活时调用（使用了`<keep-alive>`的情况下）           |
| deactivated   | 在组件被销毁时调用（使用了`<keep-alive>`的情况下）           |
| beforeDestory | 在组件销毁前调用                                             |
| destoryed     | 在组件销毁后调用                                             |

生命周期示意图：

![vue-lifecycle](../Images/vue-lifecycle.png)



