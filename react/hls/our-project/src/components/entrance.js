import './entrance.css';
const Entrance = () => {
    return (<>
        <div class="ui inverted segment entrance">
            <div class="ui inverted form">
                <div class="two fields">
                    <div class="field">
                        <label>Full Name</label>
                        <input placeholder="Full Name" type="text" />
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input placeholder="Password" type="password" />
                    </div>
                </div>
                <div class="ui submit button">Submit</div>
            </div>
        </div>

    </>);
}
export default Entrance;
