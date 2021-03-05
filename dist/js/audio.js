//渲染功能 渲染图片  音乐信息 是否喜欢
;;
(function(root) {
    function AudioManage() {
        this.audio = new Audio(); //创建一个auto实例；
        this.status = 'pause';
    }
    AudioManage.prototype = {
        //加载音乐
        load(src) {
            this.audio.src = src; //设置音乐的路径
            this.audio.load(); //加载音乐
        },
        //播放音乐
        play() {
            this.audio.play();
            this.status = 'play';
        },
        //暂停音乐
        pause() {
            this.audio.pause();
            this.status = 'pause';
        },
        //音乐播放完成事件
        end(fn) {
            this.audio.onended = fn;
        },
        //跳到某个时间点
        playTo(time) {
            this.audio.currentTime = time;
        }
    }


    root.music = new AudioManage() //把实例对象暴露出去
})(window.player || (window.player = {}))