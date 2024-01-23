<template>
    <div class="matte" >
        <div class="modal">
            <h2>설정</h2>
            <fieldset>
                <label>오디오 속도 <font-awesome-icon icon="fa-solid fa-volume-high" /></label>
                <span class="controls">
                    
                    <span 
                        :class="selectedClass(0.25)" 
                        @click="audioPlaybackSpeed = 0.25"
                    >
                        <font-awesome-icon icon="fa-solid fa-baby" />
                        가장 느리게
                    </span>
                    <span 
                        :class="selectedClass(0.5)" 
                        @click="audioPlaybackSpeed = 0.5"
                    >
                        <font-awesome-icon icon="fa-solid fa-wheelchair" />
                        더 느리게
                    </span>
                    <span 
                        :class="selectedClass(0.75)" 
                        @click="audioPlaybackSpeed = 0.75"
                    >
                        <font-awesome-icon icon="fa-solid fa-person-walking" />
                        느리게
                    </span>
                    <span 
                        :class="selectedClass(1.0)" 
                        @click="audioPlaybackSpeed = 1.0"
                    >
                        <font-awesome-icon icon="fa-solid fa-person-running" />
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
