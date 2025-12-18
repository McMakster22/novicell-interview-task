<template>
    <footer class="app-footer" role="contentinfo">
        <div class="footer-inner">
            <div class="brand">© {{ year }} MyShop</div>
            <nav class="footer-nav" aria-label="Footer">
                <a href="#" @click.prevent>Terms</a>
                <a href="#" @click.prevent>Privacy</a>
                <a href="#" @click.prevent>Contact</a>
            </nav>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
    background: #f8f9fb;
    border-top: 1px solid #e6e9ef;
    padding: 1rem 0;
    font-size: 0.875rem;
    color: #4b5563;
}
.footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}
.brand {
    font-weight: 500;
}
.footer-nav {
    display: flex;
    gap: 0.75rem;
}
.footer-nav a {
    color: inherit;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
}
.footer-nav a:hover {
    background: rgba(0,0,0,0.04);
}
@media (max-width: 540px) {
    .footer-inner { flex-direction: column; text-align: center; }
}
</style>