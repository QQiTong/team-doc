# 控制台问题

## ref dom引用 正常情况是这样的

```js
<div ref="divRef">aa</div>
```

```js
const divRef = ref();
onMounted(() => {
  console.log("ref", divRef.value);
});
```

结果:

```html
ref <div>aa</div>
```

## 但是在我们控制台界面上却是这样
```js
divRef.value[0] 才能取到对应的dom元素
```

## 打开字幕的整个流程

1. 打开字幕开关：
    - sourceStyleList 插入 字幕node元素
    - createWorkForm 对象中插入srtStyle对象
2. 关闭字幕开关:
    - sourceStyleList 删除 字幕node元素
    - createWorkForm 对象中将srtStyle对象置空