<template>
  <header>
	<div class="pure-g">
		<div class="pure-u-1">
			<div class="header-contents">
				<div class="header-logo">
					<router-link to="/">
						<img src="../assets/img/logos/izzi-logo.svg" alt="izzi">
					</router-link>
				</div>
				<div class="header-options" :class="clasess?'header-options--expanded':''">
					<a href="/" @click.prevent="show" class="header-options__toggle">
						<span>{{userStore.name}}</span>
						<svg class="icon" aria-hidden="true"><use xlink:href="../assets/img/icons/symbol-defs.svg#icon-angle-left"></use></svg>
					</a>
					<div class="header-options__dropdown">
						<ul>
							<!--<li><a href="#/">Link</a></li>-->
							<li><a href="#" @click.prevent="logout">Salir</a></li>
						</ul>
					</div>
				</div>
				<!-- <ProgressBar progress={10} /> -->
			</div>
		</div>
	</div>
	</header>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import { useUserStore } from '../stores/users';

	const userStore = useUserStore();
	const router = useRouter();
	const clasess = ref(false);

	const show = ()=>{
		clasess.value = !clasess.value;
	}

	const logout = () => {
		userStore.logout();
		router.push('/login');
	}
</script>

<style lang="scss" scoped>

</style>