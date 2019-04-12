const postedBy = async (parent, args, context) => {
    return context.prisma.link({ id: parent.id }).postedBy()
  };
const votes = async (parent, args, context) => {
  return context.prisma.link({ id: parent.id }).votes()
}

  module.exports = {
    postedBy,
    votes
  }
