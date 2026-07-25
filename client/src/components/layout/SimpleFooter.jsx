import React from 'react';

const SimpleFooter = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} kidscodingai.com. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default SimpleFooter;
