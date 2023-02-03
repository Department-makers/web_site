import Router from 'express'
import userController from '../controllers/userController.js'
import teacherController from '../controllers/teacherController.js'
import groupController from '../controllers/groupController.js'
import subjectControllet from '../controllers/subjectControllet.js'
import departamentController from '../controllers/departamentController.js'
import topicController from '../controllers/topicController.js'
import messageController from '../controllers/messageController.js'
import studentController from '../controllers/studentController.js'
import jwtController from '../controllers/jwtController.js'


const router = new Router()


//user
router.post('/user/create', userController.createUser) //create_user
router.post('/user/remove', userController.removeUser) //remove_user
router.post('/user/update', userController.updateUser) //update_user
router.post('user/update_photo', userController.updateUserPhoto) //update_user_photo
router.post('/user/update_email', userController.updateEmail) //update_email
router.post('/user/update_password', userController.updatePassword) //update_password
router.post('/user/set_role', userController.setRole) //set_role
router.post('/user/info', userController.userInfo) //user_info


//student
router.post('/verify', studentController.verify) //verify
router.post('/reject', studentController.reject) //reject
router.post('/is_verifyed', studentController.isVerifyed) //is_verifyed


//teacher
router.post('/teacher/assign', teacherController.teacherAssign) //assign_teacher
router.post('/teacher/remove', teacherController.teacherRemove) //remout teacher
router.post('/teacher/subject', teacherController.teacherSubject) //teatcher_subject
router.post('/whose_head', teacherController.whoseHead) //whose_head
router.post('/head/make', teacherController.makeHead) //make_head


//group
router.post('/group/change', groupController.changeGroup) //change_group
router.post('/group/get', groupController.getGroup) //get_group
router.post('/group/create', groupController.createGroup) //create_group
router.post('/group/remove', groupController.removeGroup) //remove_grope
router.post('/group/info', groupController.groupInfo) //group_info
router.post('/group/students', groupController.groupStudents) //group_studs
router.post('/group/subject', groupController.groupSubject) //group_subjects
router.post('/group/can_see', groupController.canSeeGroup) //can_see_groupe
router.post('/group/subject/add', groupController.addGroupSubject) //add_group_subject
router.post('/group/subject/remove', groupController.removeGroupSubject) //remove_group_subject


//subject
router.post('/subject/create', subjectControllet.createSubject) //create_subject
router.post('/subject/remove', subjectControllet.removeSubject) //remove_subject
router.post('/subject/rename', subjectControllet.renameSubject) //rename_subject
router.post('/subject/info', subjectControllet.subjectInfo) //subject_info
router.post('/subject/can_see', subjectControllet.canSeeSubject) //can_see_subject


//departament
router.post('/dep/create', departamentController.createDepartament) //create_departament
router.post('/dep/remove', departamentController.removeDepartament) //remove_departament
router.post('/dep/info', departamentController.departamentInfo) //departament_info
router.post('/dep/rename', departamentController.renameDepartament) //rename_departament
router.post('/dep/get_verifi_list', departamentController.getDepartamentVerifyList) //get_dep_verify_list
router.post('/dep/can_see', departamentController.canSeeDepartament) //can_see_dep
router.post('/dep/get_group', departamentController.getDepartamentGroup) //get_dep_group
router.post('/dep/get_subject', departamentController.getDepartamentSubject) //get_dep_subject


//topic
router.post('/topic/create', topicController.createTopic) //create_topic
router.post('/topic/remove', topicController.removeTopic) //remove_topic
router.post('/topic/rename', topicController.renameTopic) //rename_topic
router.post('/topic/can_see', topicController.canSeeTopic) //can_see_topic


//message
router.post('/message/create', messageController.createMessage) //create_message
router.post('/message/remove', messageController.removeMessage) //remove_message
router.post('/message/edit', messageController.editMessage) //edit_message
router.post('/message/edit_file', messageController.editMessageFile) //edit_message_file
router.post('/message/info', messageController.messageInfo) //message_info
router.post('/message/get_person', messageController.getMessagePerson) //get_message_person
router.post('/message/share',messageController.shareMessage ) //share_message


router.post('/jwt/get_by_login', jwtController.getJwtByLogin) //get_jwt_by_login
router.post('/jwt/check', jwtController.checkJwt) //check_jwt
router.post('/get_password_hash', jwtController.getPassswordHash) //get_password_hash









export default router