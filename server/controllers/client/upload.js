const models = require('../../../db/mysqldb/index')
const { resClientJson } = require('../../utils/resData')
const {
  tools: { encrypt }
} = require('../../utils/index')
const config = require('../../config')
const moment = require('moment')
const multer = require('koa-multer')
const upload = require('../../utils/upload') // 上传工具类
const fs = require('fs')
const path = require('path')

const { lowdb } = require('../../../db/lowdb/index')

const Op = require('sequelize').Op
function ErrorMessage (message) {
  this.message = message
  this.name = 'UserException'
}

class Upload {
  /**
   * 用户头像上传修改
   * @param   {object} ctx 上下文对象
   */
  static async uploadUserAvatar (req, res, next) {
    try {
      const website = lowdb
        .read()
        .get('website')
        .value()
      await upload('avatarImg').single('file')(req, res, next)
      if (ctx.req.file) {
        let destination = ctx.req.file.destination.split('static')[1]
        let filename = ctx.req.file.filename
        let origin =
          req.header.origin || 'http://' + website.domain_name
        let { user = '' } = req

        let userRoleAll = await models.user_role.findAll({
          where: {
            user_role_id: {
              [Op.or]: user.user_role_ids.split(',')
            },
            user_role_type: 1 // 用户角色类型1是默认角色
          }
        })
        let userAuthorityIds = ''
        userRoleAll.map(roleItem => {
          userAuthorityIds += roleItem.user_authority_ids + ','
        })
        let message = ''
        if (~userAuthorityIds.indexOf(config.USER.dfUserAvatarNoReviewId)) {
          message = '上传用户头像成功'
          await models.user.update(
            {
              avatar: `${origin}${destination}/${filename}`
            },
            {
              where: {
                uid: user.uid // 查询条件
              }
            }
          )
          await models.user_info.update(
            {
              avatar_review_status: 2
            },
            {
              where: {
                uid: user.uid // 查询条件
              }
            }
          )
        } else {
          message = '上传用户头像成功，头像正在审核中'
          await models.user_info.update(
            {
              avatar_review: `${origin}${destination}/${filename}`,
              avatar_review_status: 1
            },
            {
              where: {
                uid: user.uid // 查询条件
              }
            }
          )
        }

        resClientJson(res, {
          state: 'success',
          message: message
        })
      } else {
        resClientJson(res, {
          state: 'error',
          message: '上传用户头像失败，文件格式有误'
        })
      }
    } catch (err) {
      resClientJson(res, {
        state: 'error',
        message: '上传图片大于1m'
      })
      return false
    }
  }

  /**
   * 文章图片上传
   * @param   {object} ctx 上下文对象
   */
  static async uploadArticlePicture (req, res, next) {
    try {
      const website = lowdb
        .read()
        .get('website')
        .value()
      await upload('articleImg').single('file')(req, res, next)
      if (ctx.req.file) {
        let destination = ctx.req.file.destination.split('static')[1]
        let filename = ctx.req.file.filename
        let origin =
          req.header.origin || 'http://' + website.domain_name
        resClientJson(res, {
          state: 'success',
          message: '文章图片上传成功',
          data: {
            img: `${origin}${destination}/${filename}`
          }
        })
      } else {
        resClientJson(res, {
          state: 'error',
          message: '文章图片上传成功失败，文件格式有误'
        })
      }
    } catch (err) {
      resClientJson(res, {
        state: 'error',
        message: '上传图片大于1m'
      })
      return false
    }
  }

  /**
   * 小书图片上传
   * @param   {object} ctx 上下文对象
   */
  static async uploadBooksPicture (req, res, next) {
    try {
      await upload('booksImg').single('file')(req, res, next)
      if (ctx.req.file) {
        let destination = ctx.req.file.destination.split('static')[1]
        let filename = ctx.req.file.filename
        let origin = req.header.origin
        resClientJson(res, {
          state: 'success',
          message: '小书图片上传成功',
          data: {
            img: `${origin}${destination}/${filename}`
          }
        })
      } else {
        resClientJson(res, {
          state: 'error',
          message: '小书图片上传成功失败，文件格式有误'
        })
      }
    } catch (err) {
      resClientJson(res, {
        state: 'error',
        message: '上传图片大于1m'
      })
      return false
    }
  }

  /**
   * 小书章节图片上传
   * @param   {object} ctx 上下文对象
   */
  static async uploadBookPicture (req, res, next) {
    try {
      await upload('bookImg').single('file')(req, res, next)
      if (ctx.req.file) {
        let destination = ctx.req.file.destination.split('static')[1]
        let filename = ctx.req.file.filename
        let origin = req.header.origin
        resClientJson(res, {
          state: 'success',
          message: '小书图片上传成功',
          data: {
            img: `${origin}${destination}/${filename}`
          }
        })
      } else {
        resClientJson(res, {
          state: 'error',
          message: '小书图片上传成功失败，文件格式有误'
        })
      }
    } catch (err) {
      resClientJson(res, {
        state: 'error',
        message: '上传图片大于1m'
      })
      return false
    }
  }

  /**
   * 动态图片上传
   * @param   {object} ctx 上下文对象
   */
  static async uploadDynamicPicture (req, res, next) {
    try {
      await upload('dynamic').single('file')(req, res, next)
      if (ctx.req.file) {
        let destination = ctx.req.file.destination.split('static')[1]
        let filename = ctx.req.file.filename
        let origin = req.header.origin
        resClientJson(res, {
          state: 'success',
          message: '动态图片上传成功',
          data: {
            img: `${origin}${destination}/${filename}`
          }
        })
      } else {
        resClientJson(res, {
          state: 'error',
          message: '动态图片上传成功失败，文件格式有误'
        })
      }
    } catch (err) {
      resClientJson(res, {
        state: 'error',
        message: '上传图片大于1m'
      })
      return false
    }
  }

  // 个人专栏图片上传
  static async uploadArticleBlogPicture (req, res, next) {
    try {
      await upload('articleBlogImg').single('file')(req, res, next)
      if (ctx.req.file) {
        let destination = ctx.req.file.destination.split('static')[1]
        let filename = ctx.req.file.filename
        let origin = req.header.origin
        resClientJson(res, {
          state: 'success',
          message: '个人专栏图片上传成功',
          data: {
            img: `${origin}${destination}/${filename}`
          }
        })
      } else {
        resClientJson(res, {
          state: 'error',
          message: '个人专栏图片上传成功失败，文件格式有误'
        })
      }
    } catch (err) {
      resClientJson(res, {
        state: 'error',
        message: '上传图片大于1m'
      })
      return false
    }
  }
}

module.exports = Upload
