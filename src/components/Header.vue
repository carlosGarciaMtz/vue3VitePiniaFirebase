<template>
  <header>
	<div class="pure-g">
		<div class="pure-u-1">
			<div class="header-contents">
				<div on:click={clickHandler} class="header-logo"><img src="/assets/img/logos/izzi-logo.svg" alt="izzi"></div>
				<div class="header-options">
					<a href="#/" class="header-options__toggle">
						<span>{{userStore.name}}</span>
						<svg class="icon" aria-hidden="true"><use xlink:href="/assets/img/icons/symbol-defs.svg#icon-angle-left"></use></svg>
					</a>
					<div class="header-options__dropdown">
						<ul>
							<!--<li><a href="#/">Link</a></li>-->
							<li><a href="#">Salir</a></li>
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
import { useUserStore } from '../stores/users';

const userStore = useUserStore();

</script>

<style lang="scss" scoped>

</style>