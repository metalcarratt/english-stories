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
import { audioPlaybackSpeed, modalOpen } from '../code/state';

const selectedClass = speed => audioPlaybackSpeed.value === speed ? 'selected' : ''

</script>
