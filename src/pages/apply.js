import React, { useState } from 'react';


const LandmarkForm = () => {
    const [formData, setFormData] = useState({
        store: '',
        storeAddress: '',
        money: '',
        vip: '',
        deposit: '',
        staff: '',
        buyGame: '',
        vipRoom: '',
        infood: '',
        outFood: '',
        hours: {
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: '',
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in formData.hours) {
            setFormData({
                ...formData,
                hours: { ...formData.hours, [name]: value },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 在這裡處理提交邏輯
        console.log('Submitted Data:', formData);
        // 你可以顯示模態框或其他操作
    };

    return (
        <div className="container">
            <h1 className="my-4"><b>地標申請</b></h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="store">店家名稱：</label>
                    <input type="text" id="store" name="store" className="form-control" placeholder="店家名稱" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="storeAddress">店家地址：</label>
                    <input type="text" id="storeAddress" name="storeAddress" className="form-control" placeholder="店家地址" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>場地費用</label><br />
                    <input type="radio" name="money" value="hourtime" onChange={handleChange} /> 小時計費
                    <input type="radio" name="money" value="daytime" onChange={handleChange} /> 整天計費
                </div>
                <div className="form-group">
                    <label>是否要預約</label><br />
                    <input type="radio" name="vip" value="yesvip" onChange={handleChange} /> 需要
                    <input type="radio" name="vip" value="novip" onChange={handleChange} /> 不需要
                </div>
                <div className="form-group">
                    <label>是否要訂金</label><br />
                    <input type="radio" name="deposit" value="yesdeposit" onChange={handleChange} /> 要
                    <input type="radio" name="deposit" value="nodeposit" onChange={handleChange} /> 不用
                </div>
                <div className="form-group">
                    <label>員工</label><br />
                    <input type="radio" name="staff" value="yesstaff" onChange={handleChange} /> 有
                    <input type="radio" name="staff" value="nostaff" onChange={handleChange} /> 無
                </div>
                <div className="form-group">
                    <label>現場是否有桌遊可以已購買</label><br />
                    <input type="radio" name="buyGame" value="yesbuygame" onChange={handleChange} /> 有
                    <input type="radio" name="buyGame" value="nosbuygame" onChange={handleChange} /> 沒有
                </div>
                <div className="form-group">
                    <label>有無包廂</label><br />
                    <input type="radio" name="vipRoom" value="yesviproom" onChange={handleChange} /> 有
                    <input type="radio" name="vipRoom" value="noviproom" onChange={handleChange} /> 無
                </div>
                <div className="form-group">
                    <label>現場有無提供餐點可以購買</label><br />
                    <input type="radio" name="infood" value="yesinfood" onChange={handleChange} /> 有
                    <input type="radio" name="infood" value="noinfood" onChange={handleChange} /> 無
                </div>
                <div className="form-group">
                    <label>可帶外食</label><br />
                    <input type="radio" name="outFood" value="outyesfood" onChange={handleChange} /> 可
                    <input type="radio" name="outFood" value="outnofood" onChange={handleChange} /> 不可
                </div>
                <div className="form-group">
                    <label>營業時間：</label>
                    {[['monday','一'], ['tuesday','二'], ['wednesday','三'], ['thursday','四'], ['friday','五'], ['saturday','六'], ['sunday','日']].map(day => (
                        
                        <div key={day[0]}>
                            <label htmlFor={day}>{`星期${day[1]}`}</label>
                            <input type="text" id={day[0]} name={day[0]} className="form-control" placeholder="00:00~23:59" required onChange={handleChange} />
                        </div>
                        
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">提交</button>
            </form>
        </div>
    );
};

export default LandmarkForm;
