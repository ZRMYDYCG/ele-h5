<script setup lang="ts">
interface ElSearchProps {
    showAction?: boolean
    background?: string
    placeholder?: string
    shape?: string
    modelValue?: string | number
}
const props = defineProps<ElSearchProps>()

interface ElSearchEmits {
    (e: 'search', v?: string | number): void
    (e: 'cancel'): void
    (e: 'clear'): void
    (e: 'update:modelValue', v?: string | number): void
    (e: 'inputClick'): void
}
const emits = defineEmits<ElSearchEmits>()

const onKeypress = (e: KeyboardEvent) => {
    const ENTER_CODE = 13
    if (e.keyCode === ENTER_CODE) {
        e.preventDefault()
        emits('search', props.modelValue)
    }
}
const onClear = () => {
    emits('update:modelValue', '')
    emits('clear')
}
</script>

<template>
    <div class="el-search" :class="{ 'el-search--show-action': showAction }" :style="{ background }">
        <div class="el-search__content" :class="shape ? `el-search__content--${shape}` : ''">
            <div class="el-cell el-search__field">
                <div class="el-field__left-icon">
                    <VanIcon name="search" />
                </div>
                <div class="el-cell__value">
                    <div class="el-field__body">
                        <input type="search" class="el-field__control" :value="modelValue" :placeholder="placeholder"
                            @keypress="onKeypress" @click="emits('inputClick')"
                            @input="(e) => emits('update:modelValue', (e.target as HTMLInputElement).value)" />
                        <div v-if="$slots['right-icon']" class="el-field__right-icon">
                            <slot name="right-icon"></slot>
                        </div>
                        <VanIcon v-else-if="modelValue" name="clear" class="el-field__clear" @click="onClear" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showAction" class="el-search__action">
            <slot name="action">
                <div @click="emits('cancel')">取消</div>
            </slot>
        </div>
    </div>
</template>

<style lang="scss">
:root {
    --el-search-padding: 10px var(--van-padding-sm);
    --el-search-background-color: var(--van-background-color-light);
    --el-search-content-background: var(--van-gray-1);
    --el-search-left-icon-color: var(--van-gray-6);
    --el-search-action-padding: 0 var(--van-padding-xs);
    --el-search-action-text-color: var(--van-text-color);
    --el-search-action-font-size: var(--van-font-size-md);
    --el-search-input-height: 34px;
}

.el-search {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: var(--el-search-padding);
    background: var(--el-search-background-color);

    &--show-action {
        padding-right: 0;
    }

    &__content {
        display: flex;
        flex: 1;
        padding-left: var(--van-padding-sm);
        background: var(--el-search-content-background);
        border-radius: var(--van-border-radius-sm);

        &--round {
            border-radius: var(--van-radius-max);
        }
    }

    &__action {
        padding: var(--el-search-action-padding);
        color: var(--el-search-action-text-color);
        font-size: var(--el-search-action-font-size);
        line-height: var(--el-search-input-height);
        cursor: pointer;
        user-select: none;
    }

    &__field {
        flex: 1;
        padding: 5px var(--van-padding-xs) 5px 0;
        background-color: transparent;

        .el-field__left-icon {
            color: var(--el-search-left-icon-color);
            margin-right: var(--van-padding-base);

            .van-icon {
                font-size: var(--van-field-icon-size);
            }
        }
    }
}

.el-cell {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    color: var(--van-cell-text-color);
    font-size: var(--van-cell-font-size);
    line-height: var(--van-cell-line-height);

    &__value {
        flex: 1;
        color: var(--van-cell-text-color);
        vertical-align: middle;
        word-wrap: break-word;
    }
}

.el-field {
    &__control {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
        border: 0;
        color: var(--van-field-input-text-color);
        line-height: inherit;
        text-align: left;
        background-color: transparent;
        resize: none;
        user-select: none;

        &::placeholder {
            color: var(--van-field-placeholder-text-color);
        }
    }

    &__body {
        display: flex;
        align-items: center;
    }

    &__right-icon {
        color: var(--van-field-right-icon-color);
        padding: 0 var(--van-padding-xs);
        line-height: inherit;
        flex-shrink: 0;
    }

    &__clear {
        color: var(--van-field-clear-icon-color);
        font-size: var(--van-field-clear-icon-size) !important;
        cursor: pointer;
    }
}

input {

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
    }
}
</style>
