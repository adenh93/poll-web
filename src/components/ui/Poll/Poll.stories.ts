import Poll from './Poll.svelte';

const pollProps = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "What should be my next video idea?",
  description: "I've decided to put out some more programming content on Youtube, so I've created this poll to gather some ideas from the community.",
  endDate: "2023-02-24T12:30:00.000-00:00",
  choices: [
    { id: "choice-1", name: "Rewriting open source project with Rust" },
    { id: "choice-2", name: "Resolving issues in popular open source projects" },
    { id: "choice-3", name: "Contribute to Helix editor" },
    { id: "choice-4", name: "Build an emulator core/frontend (Chip8 or Atari2600)" },
    { id: "choice-5", name: "Try out some WebAssembly front-end development" },
    { id: "choice-6", name: "Vim configuration" }
  ]
}

export default {
  component: Poll,
  title: "Poll",
};

const Template = (args: any) => ({
  Component: Poll,
  props: args
});

export const NoResults = Template.bind({});

NoResults.args = {
  poll: {
    ...pollProps
  },
  hasResults: false,
}

export const WithResults = Template.bind({});

WithResults.args = {
  poll: {
    ...pollProps,
    results: [
      { choiceId: "choice-1", voteCount: 35 },
      { choiceId: "choice-2", voteCount: 58 },
      { choiceId: "choice-3", voteCount: 14 },
      { choiceId: "choice-4", voteCount: 42 },
      { choiceId: "choice-5", voteCount: 8 },
      { choiceId: "choice-6", voteCount: 21 },
    ]
  },
  hasResults: true
}
