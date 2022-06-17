<template>
  <div class="select-holder" :class="classes">
    <svg class="icon" aria-hidden="true"><use xlink:href="../../assets/img/icons/symbol-defs.svg#icon-angle-left"></use></svg>
    <select :name="id" :id="id" v-model="selected" :required="required" @change="selectAction">
      <option value="-1">Selecciona una ciudad</option>
      <option v-for="city of values" :key="city.rpt" :value="city.rpt">{{city.name}}</option>
    </select>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

  const props = defineProps({
    id: String,
    label: String,
    classes: String,
    require: String,
    values: Array,
  });
  
  const emit = defineEmits(['action']);

  const selected = ref('-1');
  const required = computed(() => {
    return props.require == 'true' ? true : false;
  });

  const selectAction = ()=>{
    emit('action', selected.value)
  }

  onMounted(()=>{
    emit('action', selected.value)
  })
</script>