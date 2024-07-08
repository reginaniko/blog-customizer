import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: (args) => {
	  return (
		<>
		  <ArrowButton {...args} />
		</>
	  );
	},
	args: {
	  onClick: () => alert('Arrow button clicked!'), // Provide a sample onClick handler
	},
  };
