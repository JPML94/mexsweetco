import {Header, Form, Input, Button, Segment} from 'semantic-ui-react';
import Router from 'next/router';
import Layout from '../components/Layout';
import {registerCustomer} from '../lib/moltin';

export default class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    loading: false
  }

  _handleSubmit = async e => {
    e.preventDefault()

    const {name, email, password} = this.state

    this.setState({
      loading: true
    })

    try {
      const token = await registerCustomer({name, email, password})
      localStorage.setItem('customerToken', token)
      Router.push('/myaccount')

    } catch (e) {
      console.log(e)
      this.setState({
        loading: false
      })
    }
  }

  _handleChange = ({target: {name, value}}) => this.setState({
    [name]: value
  })

  render() {
    const {loading} = this.state

    return (
      <Layout title='Register'>
        <Header as="h1">Create an account</Header>

        <Form onSubmit={this._handleSubmit} loading={loading}>
          <Segment>
            <Form.Field>
              <label>Name</label>
              <Input
                fluid
                name="name"
                autoFocus
                onChange={e => this._handleChange(e)}
              />
              <label>Email</label>
              <Input
                fluid
                name="email"
                type="email"
                onChange={e => this._handleChange(e)}
              />
              <label>Password</label>
              <Input
                fluid
                name="password"
                type="password"
                onChange={e => this._handleChange(e)}
              />
            </Form.Field>
            <Button type="submit" color="orange">Register</Button>
          </Segment>
        </Form>
      </Layout>
    )
  }
}