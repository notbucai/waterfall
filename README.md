## JS瀑布流

js实现瀑布流布局  
> 监听每一张图片的加载，同时更新当前位置，父元素保持和元素等高（手动清楚了浮动）  

## 用法
```
<!-- 准备html (样式自己写 class 也可以自定义)-->
<main id="app">
	<div class="item">
		<img src="../img/1.gif" alt="1">
		<p>条目1加载成功</p>
	</div>
	<div class="item">
		<img src="../img/2.gif" alt="2">
		<p>条目2加载成功</p>
	</div>
	<div class="item">
		<img src="../img/3.gif" alt="3">
		<p>条目3加载成功</p>
	</div>
</main>
<!--  引入 waterfall.js  -->

<script src="../js/waterfall.js"></script>

<script>
	// 实例化WaterFallList
	new WaterFallList({
		// 根元素
		el:"#app",
		count: 4,
	}).render();
</script>

```



## 展示

![展示](./show.png)
