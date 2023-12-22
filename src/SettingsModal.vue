<template>
    <div class="matte" >
        <div class="modal">
            <h2>Settings</h2>
            <fieldset>
                <label>Audio Speed</label>
                <span class="controls">
                    <span :class="audioPlaybackSpeed === 0.25 ? 'selected' : ''" @click="audioPlaybackSpeed = 0.25">Slowest</span>
                    <span :class="audioPlaybackSpeed === 0.5 ? 'selected' : ''" @click="audioPlaybackSpeed = 0.5">Slower</span>
                    <span :class="audioPlaybackSpeed === 0.75 ? 'selected' : ''" @click="audioPlaybackSpeed = 0.75">Slow</span>
                    <span :class="audioPlaybackSpeed === 1.0 ? 'selected' : ''" @click="audioPlaybackSpeed = 1.0">Normal</span>
                </span>
            </fieldset>
            <button @click="() => modalOpen = false">Close</button>
        </div>
    </div>
</template>

<script setup>
import { audioPlaybackSpeed, modalOpen } from './state';


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
    /* padding-top: 20px; */
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
    background-color: #aaa;
    padding: 10px;
    border-radius: 5px;
}

.modal fieldset .controls span:hover {
    background-color: #777;
    cursor: pointer;
}

.modal fieldset .controls span.selected {
    background-color: yellow;
}

.modal button {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    margin-top: 20px;
}
</style>