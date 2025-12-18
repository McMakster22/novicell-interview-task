<template>
    <main class="error-page" role="main" aria-labelledby="error-title">
        <div class="card">
            <div class="art">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                    <circle cx="60" cy="60" r="54" fill="#f8d7da"/>
                    <path d="M60 36v36" stroke="#721c24" stroke-width="6" stroke-linecap="round"/>
                    <circle cx="60" cy="84" r="4" fill="#721c24"/>
                </svg>
            </div>

            <div class="content">
                <div class="status" aria-hidden="true">{{ displayStatus }}</div>
                <h1 id="error-title">{{ title }}</h1>
                <p class="message">{{ displayMessage }}</p>

                <div class="actions">
                    <button class="btn" @click="goHome" type="button">Home</button>
                    <button class="btn" @click="goBack" type="button">Back</button>
                </div>
            </div>
        </div>
        <footer class="hint" v-if="showHint">
            If the problem persists, contact support or try again later.
        </footer>
    </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
    status: { type: [Number, String], default: 404 },
    message: { type: String, default: 'The page you are looking for cannot be found.' },
    title: { type: String, default: 'Something went wrong' }
})

const router = useRouter()
const route = useRoute()

const displayStatus = computed(() => {
    // prefer route params if present (useful for error redirects)
    return route?.params?.status ?? props.status
})

const displayMessage = computed(() => {
    return route?.params?.message ?? props.message
})

const showHint = true

function goHome() {
    router.push('/')
}

function goBack() {
    router.back()
}

function retry() {
    window.location.reload()
}
</script>

<style scoped>

.error-page{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg,#f7fafc 0%, #fff 100%);
    padding: 32px;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.card{
    display:flex;
    gap: 28px;
    align-items: center;
    max-width: 920px;
    width: 100%;
    background: var(--card);
    padding: 28px;
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(16,24,40,0.06);
    border: 1px solid var(--glass);
}

.art svg{
    width:120px;
    height:120px;
    display:block;
}

.content{
    flex:1;
}

.status{
    font-weight: 700;
    font-size: 40px;
    color: white;
    line-height:1;
}

h1{
    margin:6px 0 8px;
    font-size: 22px;
}

.message{
    margin:0 0 18px;
    color: var(--muted);
}

.actions{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
}

.btn{
    padding:10px 14px;
    border-radius:8px;
    border:1px solid rgba(17,24,39,0.06);
    background:transparent;
    cursor:pointer;
    font-weight:600;
}

.btn.primary{
    color:white;
    border-color:transparent;
}

.btn.muted{
    background:#f3f4f6;
}

.hint{
    margin-top:14px;
    color:var(--muted);
    font-size:13px;
}

@media (max-width:640px){
    .card{flex-direction:column; text-align:center; padding:20px}
    .art svg{width:100px;height:100px}
    .status{font-size:34px}
}
</style>