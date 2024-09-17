<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-neutral-blue-700 px-5"
  >
    <div
      class="w-full max-w-sm rounded-2xl bg-gradient-to-t from-neutral-blue-600 to-neutral-blue-500 px-8 py-7"
    >
      <div v-show="!submitRating" class="flex flex-col gap-y-5">
        <span class="flex size-10 items-center justify-center rounded-full bg-white/5">
          <img src="/images/icon-star.svg" />
        </span>
        <h1 class="font-overpass text-2xl text-white">How did we do ?</h1>
        <p class="font-overpass text-rating text-neutral-grey">
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
        <div class="flex w-full items-center justify-between gap-x-5">
          <span
            @click="activateRating(index)"
            v-for="(rating, index) in ratingList"
            :key="index"
            class="flex size-9 items-center justify-center rounded-full bg-white/5 pt-1 font-overpass text-sm font-bold text-neutral-grey hover:cursor-pointer hover:bg-primary-500 hover:text-neutral-blue-600 desktop:size-11 desktop:text-rating"
            :class="{ 'bg-white/100': activeRating === index }"
          >
            {{ rating }}
          </span>
        </div>
        <button
          @click="updateRating(activeRating)"
          class="mt-2 rounded-full bg-primary-500 pb-3 pt-4 font-overpass text-rating font-bold uppercase leading-3 tracking-widest text-neutral-blue-600 hover:bg-white"
        >
          submit
        </button>
      </div>
      <div
        v-show="submitRating"
        class="flex flex-col items-center justify-center gap-y-5"
      >
        <img src="/images/illustration-thank-you.svg" />
        <span
          class="flex w-2/3 items-center justify-center rounded-full bg-white/5 px-2 pb-1 pt-2 font-overpass text-rating font-light text-primary-500/80"
          >You selected {{ rateScore }} out of 5</span
        >
        <h1 class="font-overpass text-2xl text-white">Thank you!</h1>
        <p class="text-center font-overpass text-rating text-neutral-grey">
          We appreciate you taking the time to give a rating. If you ever need more
          support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const submitRating = ref(false);
const rateScore = ref(0);
const activeRating = ref();
const ratingList = [1, 2, 3, 4, 5];

const activateRating = (rating: number) => {
  activeRating.value = rating;
};

const updateRating = (rating: number) => {
  submitRating.value = !submitRating.value;
  rateScore.value = rating + 1;
};
</script>
