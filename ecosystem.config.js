module.exports = {
 apps: [{
  name: 'node-on-aws',
  script: './index.js'
}],
deploy: {
  production: {
    user: 'ubuntu',
    host: 'ec2-52-15-238-118.us-east-2.compute.amazonaws.com',
    key: '~/.ssh/node-on-aws.pem',
    ref: 'origin/master',
    repo: 'git@github.com:oim5nu/node-on-aws.git',
    path: '/home/ubuntu/node-on-aws',
    'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
