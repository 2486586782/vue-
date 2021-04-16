<template>
    <div>
        Dataall01页面{{$route.params.id}}
    </div>
</template>
<script>
export default {
  name:"Dataall01",
  mounted() {
    console.log(this.$route.params.id)
  },

}
</script>