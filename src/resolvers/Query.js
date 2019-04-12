const { getUserId } = require('../utils');

const feed = (root, args, context, info) => context.prisma.links();
const link = (root, args, context, info) => context.prisma.link({ id: args.id });
const user = (root, args, context, info) => context.prisma.user({ id: args.id });
const users = (root, args, context, info) => context.prisma.users();
const me = (root, args, context, info) => {
  const user = getUserId(context);
  if (user) {
    return context.prisma.user({ id: user });
  }
}
module.exports = {
    feed,
    link,
    user,
    users,
    me
  }
