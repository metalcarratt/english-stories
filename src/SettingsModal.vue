<template>
    <div class="matte" >
        <div class="modal">
            <h2>설정</h2>
            <fieldset>
                <label>오디오 속도</label>
                <span class="controls">
                    
                    <span 
                        :class="selectedClass(0.25)" 
                        @click="audioPlaybackSpeed = 0.25"
                    >
                        <img src="speed1.png"/>
                        가장 느리게
                    </span>
                    <span 
                        :class="selectedClass(0.5)" 
                        @click="audioPlaybackSpeed = 0.5"
                    >
                        <img src="speed2.png"/>
                        더 느리게
                    </span>
                    <span 
                        :class="selectedClass(0.75)" 
                        @click="audioPlaybackSpeed = 0.75"
                    >
                        <img src="speed3.png"/>
                        느리게
                    </span>
                    <span 
                        :class="selectedClass(1.0)" 
                        @click="audioPlaybackSpeed = 1.0"
                    >
                        <img src="speed4.png"/>
                        정상
                    </span>
                </span>
            </fieldset>
            <button @click="() => modalOpen = false">닫다</button>
        </div>
    </div>
</template>

<script setup>
import { audioPlaybackSpeed, modalOpen } from './state';

const selectedClass = speed => audioPlaybackSpeed.value === speed ? 'selected' : ''

</script>

<style>
.matte {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000aa;
}

.matte .modal {
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    margin: 40px;
    box-sizing: border-box;
    background-color: white;
    padding: 20px;
    font-family: sans-serif;
}

.modal h2 {
    text-align: center;
    font-family: sans-serif;
    font-weight: 400;
    color: #c58c20;
}

.modal fieldset label {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
}

.modal fieldset {
    border: none;
    padding: 0;
}

.modal fieldset .controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
}

.modal fieldset .controls span {
    /* background-color: #aaa; */
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
}

.modal fieldset .controls span img {
    width: 65px;
}

.modal fieldset .controls span:hover {
    background-color: #ccc;
    cursor: pointer;
}

.modal fieldset .controls span.selected {
    background-color: #fafa89;
}

.modal button {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    margin-top: 20px;
}
</style>