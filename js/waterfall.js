;(function () {
  class Utils{
    static isDom(arg){
      return arg && (arg.nodeType===1);
    }
    static isStr(arg){
      return arg && Object.prototype.toString.call(arg).toLocaleLowerCase() === "[object string]";
    }
    static toCountList(count){
      return Array.from(new Array(count).values()).map(item=>0);
    }
  }

  class WaterFallList{
    constructor({ el, count = 3 }){
      this.el = this.toEl(el);
      this.count = count;
      this.list = Array.from(this.el.children);
      //TODO 这里应该还能优化
      this.imgs = Array.from(document.images);
      this.width = this.el.offsetWidth;
      this.itemWidth = this.width / count;
    }
    toEl(el){
      if(Utils.isStr(el)){
        el = document.querySelector(el);
      } 
      if(Utils.isDom(el)){
        return el;
      }
      throw new Error("el error");
    }
    sort() {
      const currentTop = Utils.toCountList(this.count);
      this.list.forEach((item, index)=>{

        const currentIndex = index % this.count;
        item.style.left = this.itemWidth * currentIndex + "px";
        item.style.top = currentTop[currentIndex] + "px";
        currentTop[currentIndex] += item.offsetHeight + 20;

      });
      this.el.style.height = Math.max(...currentTop)+"px";
    }
    render(){
      const _self = this;
      this.imgs.forEach(item=>{
        item.addEventListener('load',()=>{
          _self.sort();
        });  
        // item.addEventListener('load',this.sort);
      });

      this.sort();
    }
  }
  window.WaterFallList = WaterFallList;
})();