module.exports = async (ctx) => {
  await ctx.replyWithHTML(ctx.i18n.t('cmd.start.catalog'), {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: ctx.i18n.t('cmd.start.btn.catalog'),
            // web_app: {
            login_url: {
              url: ctx.config.catalogUrl,
              request_write_access: true
            }
          }
        ]
      ]
    })
  })
}
