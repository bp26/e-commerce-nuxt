<template>
  <div class="rounded-2xl shadow-xl">
    <Skeleton width="100%" height="16rem" border-radius="1rem" class="h-64 w-full rounded-2xl" />
    <div class="flex flex-col gap-4 p-4">
      <div class="flex items-center justify-between">
        <div class="w-2/3">
          <Skeleton width="100%" height="1.5rem" />
          <Skeleton width="50%" height="1rem" class="mt-2" />
        </div>
        <div>
          <Skeleton width="4rem" height="1.5rem" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <Skeleton width="3rem" height="1.5rem" />
          <Skeleton width="3rem" height="1.5rem" class="mt-2" />
        </div>
        <Skeleton width="8rem" height="1.5rem" />
      </div>

      <div class="flex items-center justify-between">
        <Skeleton width="8rem" height="3rem" />
        <Skeleton width="2rem" height="2rem" />
      </div>
    </div>
  </div>
</template>
