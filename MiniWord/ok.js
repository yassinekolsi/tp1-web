document.getElementById('color-picker').addEventListener('input',function(){
    const color=this.value;
    document.getElementById('editable-paragraph').style.color=color;
});
document.getElementById('size').addEventListener('input',function(){
    const fontSize=this.value+'px';
    document.getElementById('editable-paragraph').style.fontSize=fontSize;
});