declare namespace ApiTypes {
  interface CreatedPoll {
    id: string
    name: string
  }

  interface PollChoice {
    id: string
    name: string
  }

  interface Poll {
    id: string
    name: string
    description?: string
    endDate: string
    choices: PollChoice[]
    results: PollResult[]
  }

  interface PollResult {
    choiceId: string
    voteCount: number
  }
}
