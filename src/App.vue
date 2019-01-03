<template>
  <section id="app" class="app-demo">
    <c-chip label="red" color="red"></c-chip>
    <c-chip label="orange" color="orange"></c-chip>
    <c-chip label="yellow" color="yellow"></c-chip>
    <c-chip label="green" color="green"></c-chip>
    <c-chip label="cyan" color="cyan"></c-chip>
    <c-chip label="blue" color="blue"></c-chip>
    <c-chip label="indigo" color="indigo"></c-chip>
    <c-chip label="purple" color="purple"></c-chip>
    <c-chip label="pink" color="pink"></c-chip>
    <c-chip label="default"></c-chip>
    <c-chip label="dark" color="dark"></c-chip>
    <c-chip label="black" color="black"></c-chip>

    <c-chip color="#336774"> <div slot="content">#336774</div> </c-chip>
    <c-chip label="#724832" color="#724832"></c-chip>
    <c-chip label="#516E41" color="#516E41"></c-chip>

    <c-chip size="xs" label="超小号"></c-chip>
    <c-chip size="sm" label="小号"></c-chip>
    <c-chip label="正常"></c-chip>
    <c-chip size="lg" label="大号"></c-chip>
    <c-chip
      size="xl"
      closable
      @close="closeChip($event)"
      v-if="showClosableChip"
    >
      <span slot="content"
        >github
        <c-icon
          type="fa"
          name="github"
          color="#fff"
          size="2em"
          valign="middle"
        />
      </span>
    </c-chip>

    <c-icon
      type="feather"
      name="github"
      color="#498ff2"
      size="36"
      valign="middle"
    />
  </section>
</template>

<script>
export default {
  data() {
    return { showClosableChip: true }
  },
  methods: {
    closeChip(e) {
      console.log(e)
      this.showClosableChip = false
    }
  }
}
</script>
