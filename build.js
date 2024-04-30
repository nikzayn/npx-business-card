'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Nikhil Vaidyar'),
  handle: chalk.white(`Maintaining consistency. Period!!. Jokes apart, I have experience of 3+ years in the industry of both retail and healthcare area. 
                      Currently delving more into designing scalable systems and cloud-native tools. Skills: Golang, Docker, Kubernetes, MongoDB, Apache-Kafka, 
                      Helm, Kibana, Grafana, Prometheus, etc.`),
  work: chalk.white('Software Engineer - Victoria Secret'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('nikhilvaidyar'),
  github: chalk.gray('https://github.com/') + chalk.green('nikzayn'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('nikhil-vaidyar-2ab005124'),
  npx: chalk.red('npx') + ' ' + chalk.white('nikhilvaidyar'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + newline + // data.labelLinkedIn + data.linkedin
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
