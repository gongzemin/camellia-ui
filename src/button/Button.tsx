import { defineComponent, computed } from 'vue'
import './style/button.css' // Import the CSS file

export default defineComponent({
  name: 'CustomButton',
  props: {
    variant: {
      type: String,
      default: 'filled',
      validator: (value: string) => ['filled', 'outlined', 'text'].includes(value),
    },
  },
  setup(props, { emit, slots }) {
    const buttonClass = computed(() => ({
      btn: true,
      'btn-filled': props.variant === 'filled',
      'btn-outlined': props.variant === 'outlined',
      'btn-text': props.variant === 'text',
    }))

    const handleClick = () => {
      emit('click')
    }

    return () => (
      <button class={buttonClass.value} onClick={handleClick}>
        {slots.default ? slots.default() : 'Button'}
      </button>
    )
  },
})
