<template>
  <div class="ctrl-holder" :class="inputClasses">
    <label :for="id" class="placeholder">{{label}}</label>
    <input :type="inputType" v-model="modelInput" :name="id" :id="id" @focusin="inputFocus=true" @focusout="inputFocus=false" @input="actionInput" :required="isRequired"/>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

  const props = defineProps({
    id: String,
    label: String,
    classes: String,
    require: String,
    type: String,
  });

  const emit = defineEmits(['action']);
  
  const modelInput = ref('');
  const inputFocus = ref(false);
  
  const inputClasses = computed(() => {
    let cls = inputFocus.value ? 'focused' : '';
    cls = modelInput.value != '' ? 'filled' : cls;
    return props.classes +" "+ cls;
  });

  const inputType = computed(() => {
    return props.type != 'pass' ? 'text' : 'password';
  });

  const isRequired = computed(() => {
    return props.require == 'true' ? true : false;
  });
  
  const actionInput = ()=>{
    emit('action', modelInput.value)
  }
   
</script>