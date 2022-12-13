import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Textarea, TextareaProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Textarea',
  component: Textarea,

  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
}
