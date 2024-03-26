/*
 * @Author: zhang_quan
 * @Date: 2024-03-19 21:42:53
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-19 21:43:33
 * @FilePath: \nextjs-dashboard\app\api\auth\login.jsx
 * @Description: 
 * Copyright (c) 2024 by TWT, All Rights Reserved. 
 */


export default async function handler(req, res) {  
  if (req.method === 'POST') {  
    try {  
      // 验证用户名和密码，然后获取令牌  
      const token = await authenticateUser(req.body.username, req.body.password);  
        
      // 设置响应的cookie（或其他存储机制）  
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Secure`);  
        
      res.status(200).json({ success: true, message: '登录成功' });  
    } catch (error) {  
      res.status(401).json({ success: false, message: '登录失败' });  
    }  
  } else {  
    res.setHeader('Allow', 'POST');  
    res.status(405).end('Method Not Allowed');  
  }  
}  