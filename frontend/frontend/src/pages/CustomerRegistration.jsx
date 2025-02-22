import { useState } from "react";
import axios from "axios";
const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        termsAccepted: false
    });
    // const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const validateForm = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required.";
        if (!formData.gender) newErrors.gender = "Gender selection is required.";
        if (!formData.street) newErrors.street = "Street is required.";
        if (!formData.city) newErrors.city = "City is required.";
        if (!formData.state) newErrors.state = "State is required.";
        if (!formData.postalCode) newErrors.postalCode = "Postal code is required.";
        if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms & conditions.";

        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }
        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }
        if (!/^[0-9]{6}$/.test(formData.postalCode)) {
            newErrors.postalCode = "Postal code must be 6 digits.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                setLoading(true);
                const response = await axios.post("http://localhost:5000/api/auth/register", formData);
                alert(response.data.message);
                setLoading(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                    gender: "",
                    street: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    termsAccepted: false,
                    userType: "",
                });
            } catch (error) {
                alert("Error submitting form");
                setLoading(false);
            }
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen w-full p-4 md:p-8 gap-4">
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Your Account</h2>
                    <form className="space-y-4" onSubmit={validateForm}>
                        <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                        {errors.name && <p className="text-red-500 text-sm text-left">{errors.name}</p>}

                        <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                        {errors.email && <p className="text-red-500 text-sm text-left">{errors.email}</p>}

                        <input type="tel" name="phone" placeholder="Phone number" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                        {errors.phone && <p className="text-red-500 text-sm text-left">{errors.phone}</p>}

                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-600">{showPassword ? "🙈" : "👁"}</button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm text-left">{errors.password}</p>}

                        <div className="relative">
                            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3 text-gray-600">{showConfirmPassword ? "🙈" : "👁"}</button>
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-sm text-left">{errors.confirmPassword}</p>}

                        <div className="flex items-center gap-4">
                            <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
                            <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
                        </div>
                        {errors.gender && <p className="text-red-500 text-sm text-left">{errors.gender}</p>}
                        <select name="userType" className="w-full p-3 border rounded-lg" onChange={handleChange}>
                            <option value="">Select user type</option>
                            <option value="vendor">Vendor</option>
                            <option value="customer">Customer</option>
                            <option value="pharmacy">Pharmacy</option>
                        </select>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="termsAccepted" onChange={handleChange} />
                            <label>I accept all <span className="text-blue-600">terms & conditions</span>.</label>
                        </div>
                        {errors.termsAccepted && <p className="text-red-500 text-sm text-left">{errors.termsAccepted}</p>}

                        <button type="submit" className="w-full  text-white p-3 rounded-lg font-semibold bg-green-400">Sign in</button>
                    </form>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-50 p-4 md:p-8 space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
                <input type="text" name="street" placeholder="Street" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                {errors.street && <p className="text-red-500 text-sm text-left">{errors.street}</p>}
                <input type="text" name="city" placeholder="City" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                {errors.city && <p className="text-red-500 text-sm text-left">{errors.city}</p>}
                <input type="text" name="state" placeholder="State" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                {errors.state && <p className="text-red-500 text-sm text-left">{errors.state}</p>}
                <input type="text" name="postalCode" placeholder="Postal Code" className="w-full p-3 border rounded-lg" onChange={handleChange} />
                {errors.postalCode && <p className="text-red-500 text-sm text-left">{errors.postalCode}</p>}
            </div>
        </div>
    );
};

export default Registration;