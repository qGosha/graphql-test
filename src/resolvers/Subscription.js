const newLinkSubscribe = async (parent, args, context, info) => {
  return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload
  },
}

const newVoteSubscribe = async(parent, args, context, info) => {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newLink,
  newVote
}
