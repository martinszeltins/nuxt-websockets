<template>
    <div>
        <h1>WebSockets</h1>
    </div>

    <!-- Form -->
    <div>
        <form @submit.prevent="sendData">
            <input type="text" v-model="message">

            <button type="submit">Send</button>
        </form>
    </div>

    <!-- History -->
    <div>
        <h1>History</h1>

        <div>
            <pre>{{ history }}</pre>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { data, status, send, open, close } = useWebSocket(`ws://${location.host}/api/websocket`)

    const message = ref('')
    const history = ref<string[]>([])

    const sendData = () => {
        send(message.value)
        history.value.push(`client: ${message.value}`)

        message.value = ''
    }

    watch(data, _data => {
        history.value.push(`server: ${_data}`)
    })
</script>
