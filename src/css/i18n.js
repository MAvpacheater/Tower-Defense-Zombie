/* ===== LANGUAGE SWITCHER STYLES ===== */

.language-switcher {
    position: relative;
}

.lang-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);
    cursor: pointer;
    font-weight: 600;
    font-size: 0.875rem;
    transition: all var(--transition-normal);
    min-width: 80px;
}

.lang-btn:hover {
    background: var(--color-bg-secondary);
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

.lang-icon {
    font-size: 1.125rem;
}

.lang-text {
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.lang-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    padding: 0.5rem;
    min-width: 180px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all var(--transition-fast);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 100;
}

.lang-dropdown.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.lang-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    background: transparent;
    color: var(--color-text-primary);
    cursor: pointer;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 500;
    transition: all var(--transition-fast);
    text-align: left;
}

.lang-option:hover {
    background: var(--color-bg-secondary);
    color: var(--color-accent);
}

.lang-option.active {
    background: var(--color-bg-secondary);
    color: var(--color-accent);
}

.lang-option .flag {
    font-size: 1.25rem;
}

/* ===== RTL SUPPORT ===== */
[dir="rtl"] {
    direction: rtl;
}

[dir="rtl"] .header-content {
    flex-direction: row-reverse;
}

[dir="rtl"] .logo {
    flex-direction: row-reverse;
}

[dir="rtl"] .nav {
    flex-direction: row-reverse;
}

[dir="rtl"] .header-controls {
    flex-direction: row-reverse;
}

[dir="rtl"] .lang-dropdown {
    left: 0;
    right: auto;
}

/* ===== LANGUAGE FADE ANIMATION ===== */
[data-i18n] {
    transition: opacity var(--transition-fast);
}

[data-i18n].translating {
    opacity: 0.5;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 968px) {
    .lang-btn {
        min-width: 60px;
        padding: 0.5rem 0.75rem;
    }
    
    .lang-text {
        display: none;
    }
    
    .lang-dropdown {
        right: auto;
        left: 50%;
        transform: translateX(-50%) translateY(-10px);
    }
    
    .lang-dropdown.active {
        transform: translateX(-50%) translateY(0);
    }
}
