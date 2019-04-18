const { getUserId } = require('../utils');

const feed = async (root, args, context, info) => {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  
  const count = await context.prisma
  .linksConnection({
    where,
  })
  .aggregate()
  .count()

  return {
    links,
    count,
  }
}
const usersByName = async (root, args, context, info) => {
  const where = {
    name_contains: args.name
  } 
  const users = await context.prisma.users({
    where
  })
  return users
}
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
    me,
    usersByName
  }
