# 动画效果

```html
 <i
          :class="{ 'is-enter': isActive }"
          @mouseenter="isActive = true"
          @mouseleave="isActive = false"
          class="tpm-multi-tabs__item-icon is-leave"
          style="
            background-image: url(https://main.qcloudimg.com/trisys/assets/home/images/product/ani-hot.png);
          "
        />
```

```css
<style >
.chat-empty-icon.is-leave {
  animation: chat-empty__icon-leave 0.5s steps(24) forwards;
}
.chat-empty-icon.is-enter {
  animation: chat-empty__icon-enter 0.5s steps(24) forwards;
}
.chat-empty-icon {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto 12px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top;
  &:hover {
    cursor: pointer;
  }
}
.chat-empty-icon.is-enter {
  animation: chat-empty__icon-enter 0.5s steps(24) forwards;
}
@keyframes chat-empty__icon-enter {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 -1440px;
  }
}
@keyframes chat-empty__icon-leave {
  0% {
    background-position: 0 -1440px;
  }

  100% {
    background-position: 0 0;
  }
}
</style>

```

## SVG图片颜色设置无效解决方法-前端

想让svg图片的颜色跟随父元素的color值变化，可先用编辑器打开svg图片文件，修改以下2点后保存即可：

在svg标签中加上 fill="currentColor"
在path标签中去掉 fill="..."，或者改为 fill="currentColor"

## sticky属性作用

CSS position: sticky属性是一种特殊的定位方式，它结合了relative和fixed定位的特点。当元素没有到达指定的滚动阈值时，它的定位表现为relative（相对定位）；当元素滚动到达指定阈值时，它会变为fixed（固定定位），并停留在指定的位置，直到其父容器滚出视图。

以下是position: sticky的一些特点和使用场景：

1. 可以实现滚动时的吸附效果：当一个元素滚动到达某个阈值时，它会停留在屏幕上的特定位置，直到父容器完全离开视图。这在创建吸附式导航栏、侧边栏等场景中非常有用。

2. 需要指定阈值：使用position: sticky时，需要指定一个阈值，例如top、bottom、left或right。这些值表示元素在滚动过程中将停留在屏幕上的位置。

3. 受限于其父容器：position: sticky的元素会受其父容器边界的限制。这意味着，当父容器滚出视图时，sticky元素不会继续保持固定位置，而是跟随父容器一起滚出。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .outer {
        height: 3000px;
      }
      .container {
        height: 1000px;
        background-color: lightgray;
      }
      .sticky-element {
        position: sticky;
        top: 100px;
        width: 100px;
        height: 100px;
        background-color: red;
        padding: 10px;
      }
      .blue {
        width: 100px;
        height: 100px;
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="container">
        <div class="sticky-element">I'm a sticky element!</div>
        <div class="blue">I'm a sticky element!</div>
      </div>
    </div>
  </body>
</html>

```
