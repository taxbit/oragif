<template>
  <figure class="item">
    <div class="item__image">
      <slot name="image"></slot>
    </div>
    <figcaption class="item__caption">
      <h3 class="item__title">
        <slot name="title"></slot>
      </h3>
      <p class="item__text">
        <slot name="text"></slot>
      </p>
    </figcaption>
  </figure>
</template>
