<template>
  <figure class="card">
    <div class="card__image">
      <slot name="image"></slot>
    </div>
    <figcaption class="card__caption">
      <p class="card__text">
        <slot name="text"></slot>
      </p>
    </figcaption>
  </figure>
</template>
