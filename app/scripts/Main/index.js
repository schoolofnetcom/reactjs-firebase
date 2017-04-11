var React = require('react')
var firebase = require('firebase')
var ReactFireMixin = require('reactfire')

var List = require('./../List')

var Main = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {
            data: [],
            name: '',
            age : ''
        }
    },
    onChangeName: function(e) {
        this.setState({
            name: e.target.value
        })
    },
    onChangeAge: function(e) {
        this.setState({
            age: e.target.value
        })
    },
    handleSubmit: function(e) {
        e.preventDefault()

        if (!this.state.name || !this.state.age) {
            alert('Please fill in the fields')
        }

        this.fireBaseRef.push({
            name: this.state.name,
            age: this.state.age
        })

        this.setState({
            name: '',
            age: ''
        })
    },
    removeItem: function(key) {
        this.fireBaseRef.child(key).remove()
    },
    componentWillMount: function() {
        this.fireBaseRef = firebase.database().ref('data')
        this.bindAsArray(this.fireBaseRef.orderByValue(), 'data')
    },
    render: function() {
        return(
            <div>
                <h4>Create</h4>
                <div className="col-xs-6">
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Name: " onChange={ this.onChangeName } value={this.state.name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Age: " onChange={ this.onChangeAge } value={this.state.age} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={ this.handleSubmit } className="btn btn-default" type="button">Add</button>
                        </div>
                    </form>
                </div>
                <div className="col-xs-6">
                    <List items={ this.state.data } removeItem={ this.removeItem }/>
                </div>
            </div>
        )
    }
})

module.exports = Main